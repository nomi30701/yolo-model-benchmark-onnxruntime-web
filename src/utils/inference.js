import * as ort from 'onnxruntime-web/webgpu';

/**
 * Inference function using ONNX model
 * @param {String} model_path Yolo model path
 * @param {Number[]} input_shape array of input shape
 * @param {String} device device webgpu or cpu
 * @param {Number} warmUpCount warm up Count
 * @param {Number} testCount test Count
 * @param {HTMLCanvasElement} benchmarkChart benchmark benchmarkChart
 * @param {Function} setWarmUpAvgTime set warm up average time
 * @param {Function} setTestAvgTime set test average time
 */
export async function inference(
  model_path,
  input_shape,
  device,
  warmUpCount,
  testCount,
  benchmarkChart,
  setWarmUpAvgTime,
  setTestAvgTime
) {
  let totalWarmTime = 0;
  let totalTestTime = 0;

  // env flags
  ort.env.wasm.wasmPaths = `./`;

  // load model
  const onnxSession = await ort.InferenceSession.create(model_path, {
    executionProviders: [device],
  });

  const input_name = onnxSession.inputNames[0]; // input name
  let output_name = onnxSession.outputNames[0]; // output name

  // Function to perform inference and measure execution time
  async function performInference() {
    const dummy_input_tensor = new ort.Tensor(
      "float32",
      new Float32Array(input_shape.reduce((a, b) => a * b)).map(() =>
        Math.random()
      ),
      input_shape
    );

    const startTime = performance.now(); // start timer
    const raw_output = await onnxSession.run({
      [input_name]: dummy_input_tensor,
    });
    const endTime = performance.now(); // end timer
    raw_output[output_name].dispose(); // release output tensor
    
    return endTime - startTime;
  }

  // Function to update the benchmark chart
  function updateBenchmarkChart(iteration, executionTime) {
    benchmarkChart.data.labels.push(iteration);
    benchmarkChart.data.datasets[0].data.push(executionTime);
    benchmarkChart.update();
  }

  // Warm up
  for (let i = 0; i < warmUpCount; i++) {
    const eps = await performInference();
    totalWarmTime += eps;
    updateBenchmarkChart(i, eps);
    setWarmUpAvgTime((totalWarmTime / (i + 1)).toFixed(2));
    await new Promise(resolve => setTimeout(resolve, eps));
  }

  // Test
  for (let i = warmUpCount; i < testCount + warmUpCount; i++) {
    const eps = await performInference();
    totalTestTime += eps;
    updateBenchmarkChart(i, eps);
    setTestAvgTime((totalTestTime / (i - warmUpCount + 1)).toFixed(2));
    await new Promise(resolve => setTimeout(resolve, eps)); 
  }
}
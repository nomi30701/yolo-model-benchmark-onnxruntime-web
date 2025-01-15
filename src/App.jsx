import "./assets/App.css";
import { useRef, useState } from "react";
import { inference } from "./utils/inference";

function App() {
  // Settings Ref
  const deviceRef = useRef(null);
  const modelRef = useRef(null);
  const [warmUpAvgTime, setWarmUpAvgTime] = useState("0");
  const [testAvgTime, setTestAvgTime] = useState("0");

  // Info Ref
  const warmUpCountRef = useRef(null);
  const testCountRef = useRef(null);
  const modelInfoRef = useRef(null);

  // Button Ref
  const startBenchmarkRef = useRef(null);
  const fileInputRef = useRef(null);
  const [customModels, setCustomModels] = useState([]);

  // content Ref
  const chartRef = useRef(null);
  const benchmarkRef = useRef(null);

  // setup chart
  window.onload = () => {
    const ctx = chartRef.current.getContext("2d");
    benchmarkRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Inference Time (ms)",
            data: [],
            borderColor: "lightblue",
            tension: 0.1,
          },
        ],
      },

      // theme setting
      options: {
        plugins: {
          legend: {
            labels: {
              font: {
                size: 16,
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: 14,
              },
            },
          },
          y: {
            ticks: {
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });
  };

  // start benchmark button click
  const startBenchmark = async () => {
    startBenchmarkRef.current.disabled = true; // disable button

    // model info
    const modelInfoEl = modelInfoRef.current;
    modelInfoEl.textContent = "Start benchmark...";
    modelInfoEl.style.color = "red";
    modelInfoEl.classList.add("blink"); // add animation class

    // Reset chart data and labels and Reset Avg time
    benchmarkRef.current.data.labels = [];
    benchmarkRef.current.data.datasets[0].data = [];
    setWarmUpAvgTime("0");
    setTestAvgTime("0");

    try {
      // config
      const input_shape = [1, 3, 640, 640];
      const selectedModel = modelRef.current.value;
      const customModel = customModels.find(model => model.url === selectedModel);
      const model_path = customModel ? customModel.url : `${window.location.href}/models/${selectedModel}.onnx`;

      await inference(
        model_path,
        input_shape,
        deviceRef.current.value,
        Number(warmUpCountRef.current.value),
        Number(testCountRef.current.value),
        benchmarkRef.current,
        setWarmUpAvgTime,
        setTestAvgTime
      );
    } catch (error) {
      console.error(error);
      modelInfoEl.textContent = "Failed!";
      modelInfoEl.classList.remove("blink"); // remove animation class
      startBenchmarkRef.current.disabled = false;
      return;
    }
    modelInfoEl.textContent = "Finished!";
    modelInfoEl.style.color = "green";
    modelInfoEl.classList.remove("blink"); // remove animation class
    startBenchmarkRef.current.disabled = false;
  };

  // if file changed
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name.replace('.onnx', '');
      setCustomModels([...customModels, { name: fileName, url: URL.createObjectURL(file) }]);
    }
  };

  return (
    <>
      <h1>Model Benchmark - onnxruntime Web</h1>
      <div id="setting-container">
        <div>
          <label htmlFor="device-selector">Backend:</label>
          <select name="device-selector" ref={deviceRef}>
            <option value="webgpu">webGPU</option>
            <option value="wasm">Wasm(cpu)</option>
          </select>
        </div>
        <div>
          <label htmlFor="model-selector">Model:</label>
          <select name="model-selector" ref={modelRef}>
            {/* <option value="YOUR_FILE_NAME">CUSTOM-MODEL</option> */}
            <option value="yolov10n">yolov10n-2.3M</option>
            <option value="yolov10s">yolov10s-7.2M</option>
            <option value="yolov9t-simplify">yolov9t-2.0M</option>
            <option value="yolov9s-simplify">yolov9s-7.1M</option>
            <option value="gelan-s2-simplify">gelan-s2</option>
            <option value="yolov8n-simplify">yolov8n-3.2M</option>
            <option value="yolov8s-simplify">yolov8s-11.2M</option>
            {customModels.map((model, index) => (
              <option key={index} value={model.url}>{model.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="warmUpCount-input">Warm up count:</label>
          <input
            type="number"
            id="warmUpCount-input"
            defaultValue={1}
            min={0}
            ref={warmUpCountRef}
          />
        </div>
        <div>
          <label htmlFor="testCount-input">Testing count:</label>
          <input
            type="number"
            id="testCount-input"
            defaultValue={100}
            min={0}
            ref={testCountRef}
          />
        </div>
      </div>

      <div id="button-container">
        <button onClick={startBenchmark} ref={startBenchmarkRef}>
          Start benchmark
        </button>
        <input 
          type="file"
          accept=".onnx" 
          onChange={handleFileChange}
          ref={fileInputRef}
          hidden />
        <button onClick={()=>fileInputRef.current.click()}>
          Add model
        </button>
      </div>

      <div id="info-container">
        <p>
          Warm up Average Time:{" "}
          <span className="info-ms">{warmUpAvgTime}ms</span>
        </p>
        <p>
          Inference Average Time:{" "}
          <span className="info-ms">{testAvgTime}ms</span>
        </p>
      </div>
      <canvas ref={chartRef}></canvas>

      <p ref={modelInfoRef} style={{ fontSize: '1.3rem' }}>Not Start!</p>
    </>
  );
}

export default App;
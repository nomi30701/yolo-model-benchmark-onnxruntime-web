# Yolo model Benchmark onnxruntime web

<img src="https://github.com/nomi30701/yolo-model-benchmark-onnxruntime-web/blob/main/Preview.png" height=85% width=85%/>

This is yolo model Benchmark, power by onnxruntime web.

Support WebGPU and wasm(cpu).

Test yolo model inference time in web.

Realtime Show inference time in Chart and Average time.

## Models and Performance
| Model | Input Size | Param. |
| :-- | :-: | :-: |
| [YOLO11-N](https://github.com/ultralytics/ultralytics) | 640 | 2.6M |
| [YOLO11-S](https://github.com/ultralytics/ultralytics) | 640 | 9.4M |
| [YOLO11-M](https://github.com/ultralytics/ultralytics) | 640 | 20.1M |
| [YOLOv10-N](https://github.com/THU-MIG/yolov10) | 640 | 2.3M |
| [YOLOv10-S](https://github.com/THU-MIG/yolov10) | 640 | 7.2M |
| [YOLOv9-T](https://github.com/WongKinYiu/yolov9) | 640 | 2.0M |
| [YOLOv9-S](https://github.com/WongKinYiu/yolov9) | 640 | 7.1M |
| [GELAN-S2](https://github.com/WongKinYiu/yolov9) | 640 | |
| [YOLOv8-N](https://github.com/ultralytics/ultralytics) | 640 | 3.2M |
| [YOLOv8-S](https://github.com/ultralytics/ultralytics) | 640 | 11.2M |


## Setup
```bash
git clone https://github.com/nomi30701/yolo-model-benchmark-onnxruntime-web.git
cd yolo-model-benchmark-onnxruntime-web
yarn install # install dependencies
```
## Scripts
```bash
yarn run dev # start dev server 
```

## Use other YOLO model
1. Conver YOLO model to onnx format. Read more on [Ultralytics](https://docs.ultralytics.com/).
  ```Python
  from ultralytics import YOLO

  # Load a model
  model = YOLO("yolo11n.pt")

  # Export the model
  model.export(format="onnx", opset=12)  
  ```
2. Copy your yolo model to `./public/models` folder. (Also can click **`Add model`** button)
3. Add `<option>` HTML element in `App.jsx`, change `value="YOUR_FILE_NAME"`,  or Press "Add model" button.
    ```HTML
    ...
    <option value="YOUR_FILE_NAME">CUSTOM-MODEL</option>
    <option value="yolov10n">yolov10n-2.3M</option>
    <option value="yolov10s">yolov10s-7.2M</option>
    ...
    ```
4. select your model on page.
5. DONE!👍
> ✨ Support Webgpu
> 
> For onnx format support Webgpu, export model set **`opset=12`**.
import { defineConfig, normalizePath } from "vite";
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from "vite-plugin-static-copy"
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(
            path.resolve(__dirname, "node_modules/onnxruntime-web/dist") + "/*.wasm"
          ),
          dest: "./",
        },
      ],
    }),
  ],
  base: '/yolo-model-benchmark-onnxruntime-web/',
})

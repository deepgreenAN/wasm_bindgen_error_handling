import { defineConfig } from 'vite';
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@src": path.resolve("./src"),
            "@math_lib": path.resolve("./src/math_lib/pkg")
        }
    }
})
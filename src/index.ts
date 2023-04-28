import { defineConfig } from "tsup";

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  format: ["cjs"],
  minify: false,
  skipNodeModulesBundle: true,
  sourcemap: true,
  target: "es2020",
  treeshake: true,
});

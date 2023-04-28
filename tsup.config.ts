import { defineConfig } from "tsup";

export default defineConfig({
  tsconfig: "src/tsconfig.json",
  entry: ["src/**/*.ts"],
  format: ["cjs"],
  target: "es2020",
  clean: true,
  bundle: true,
  skipNodeModulesBundle: true,
  treeshake: true,
  minify: false,
  sourcemap: true,
  dts: true,
});

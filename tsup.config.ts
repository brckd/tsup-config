import { defineConfig } from "tsup";
import config from "./src";

export default defineConfig({
  ...config,
  entry: ["src/**/*.ts"],
  tsconfig: "src/tsconfig.json",
});

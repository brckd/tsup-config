import { defineConfig } from "tsup";
import config from ".";

export default defineConfig({
  ...config,
  skipNodeModulesBundle: false,
  minify: true,
});

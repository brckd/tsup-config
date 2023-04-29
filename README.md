# @bricked/tsup-config

[![license](https://custom-icon-badges.demolab.com/github/license/brycked/tsup-config?logo=law)](LICENSE.md)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![version](https://img.shields.io/npm/v/@bricked/tsup-config?color=crimson&logo=npm)](https://www.npmjs.com/package/@bricked/tsup-config)

Shared tsup configuration for my projects.

## Installation

[Node.js](https://nodejs.org/) 16.14.0 or newer is required.

```sh
npm install --save-dev @bricked/tsup-config
yarn add --dev @bricked/tsup-config
pnpm add --dev @bricked/tsup-config
```

## Usage

## Base Config

Use the [`base`](./src/index.ts) config in your `tsup.config.ts` to compile for npm:

```ts
import { defineConfig } from "tsup";
import config from "@bricked/tsup-config";

export default defineConfig({
  ...config,
  entry: ["src/**/*.ts"],
  tsconfig: "src/tsconfig.json",
});
```

## Minifying Config

Use the [`minify`](./src/minify.ts) config to compile for targets without npm:

```ts
import { defineConfig } from "tsup";
import config from "@bricked/tsup-config/minify";

export default defineConfig({
  ...config,
  entry: ["src/**/*.ts"],
  tsconfig: "src/tsconfig.json",
});
```

## Building

### Building Publicly

Pulls to the repository will automatically be built with [semantic-release](https://github.com/semantic-release/npm).
The built package can be found on [npm](https://www.npmjs.com/package/@bricked/tsup-config?activeTab=code) or in the
[latest github release](https://github.com/brycked/tsup-config/releases/latest).

### Building Locally

The package can also be built locally using the `build` script.

```sh
npm run build
yarn run build
pnpm run build
```

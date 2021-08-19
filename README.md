# @socheatsok78/dotenv-env

[![npm-badge][npm-badge]][npm-url]

<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="dotenv" align="right" width="70px" />

Enhance `dotenv` with `typescript` declaration file.  
Work in both **JavaScript** and **TypeScript** project with minimal configurations.

## Installation

```sh
npm install @socheatsok78/dotenv-env
# or
yarn add @socheatsok78/dotenv-env
```

## Usage

Simply add a `tsconfig.json` or `jsconfig.json` to indicates that the directory is the root of a TypeScript or JavaScript project.

See https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

Here a minimal configurations:

Example `jsconfig.json`:

```json
{
  "include": [
    "types/**/*"
  ],
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "moduleResolution": "node",
    "esModuleInterop": false,
    "baseUrl": ".",
    "paths": {
      //
    }
  }
}
```

Example `tsconfig.json`:

```json
{
  "include": [
    "types/**/*"
  ],
  "compilerOptions": {
    "target": "es5",
    "strict": true,
    "module": "es2015",
    "moduleResolution": "node"
  }
}
```

#### Using with `node`

There is no other configuration needed for working with `nodejs`. 

```ts
// types/dotenv.d.ts
import { NodeEnvironment } from '@socheatsok78/dotenv-env'

declare module "@socheatsok78/dotenv-env" {
  interface NodeEnvironment {
    /**
     * This will be one of "development", "production" or "test" depending on the mode the app is running in
     */
    NODE_ENV: string
  }
}
```

Then within your project e.g. `index.js`

```js
// main.js
import { env } from '@socheatsok78/dotenv-env'

const mode = env(NODE_ENV, 'development')
```

#### Using with `browser`

> For this to work in the browser you'll need to use bundler such as `webpack`, `rollup` or others for this to work.

Here an example usage with `vuejs` project. This will work out-of-the-box since `@vue/cli` uses `webpack` as its bundler.

First, update your `.env` file.

```shell
# .env
NODE_ENV=development

VUE_APP_MY_ENV_VARIABLE=value
VUE_APP_ANOTHER_VARIABLE=value
```

Create a new typescript's type declaration `dotenv.d.ts` in `types` folder.

```ts
// types/dotenv.d.ts
import { NodeEnvironment } from '@socheatsok78/dotenv-env'

declare module "@socheatsok78/dotenv-env" {
  interface NodeEnvironment {
    /**
     * This will be one of "development", "production" or "test" depending on the mode the app is running in
     */
    NODE_ENV: string

    /**
     * This corresponds to the publicPath option in `vue.config.js` and is the base path your app is deployed at
     */
    BASE_URL: string

    VUE_APP_MY_ENV_VARIABLE: string
    VUE_APP_ANOTHER_VARIABLE: string
  }
}
```

Then within your project e.g. `main.js`

```js
// main.js
import { env } from '@socheatsok78/dotenv-env'

const MY_ENV_VARIABLE = env(VUE_APP_MY_ENV_VARIABLE, 'default')
```

**Preview**

<img src="https://user-images.githubusercontent.com/4363857/130068203-e1575bb3-c5c8-46ff-8f97-5bc5997b487b.gif" width="100%">

## Licensed

Licensed under [MIT License](LICENSE).

<!-- Variables -->
[npm-badge]: https://img.shields.io/npm/dm/@socheatsok78/dotenv-env
[npm-url]: https://npmjs.com/@socheatsok78/dotenv-env

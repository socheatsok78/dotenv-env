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

Here an example usage with `vuejs` project.

First, update your `.env` file.

```shell
# .env
NODE_ENV=development

VUE_APP_MY_ENV_VARIABLE=value
VUE_APP_ANOTHER_VARIABLE=value
```

Create a new typescript's type declaration `dotenv.d.ts` in `types` folder.

```ts
// dotenv.d.ts

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

<img src="https://user-images.githubusercontent.com/4363857/130062753-1aaaefdb-6e29-40f5-abe8-9366d78433e6.png" width="360px">

## Licensed

Licensed under [MIT License](LICENSE).

<!-- Variables -->
[npm-badge]: https://img.shields.io/npm/dm/@socheatsok78/dotenv-env
[npm-url]: https://npmjs.com/@socheatsok78/dotenv-env

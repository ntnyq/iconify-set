# iconify-set

[![CI](https://github.com/ntnyq/iconify-set/workflows/CI/badge.svg)](https://github.com/ntnyq/iconify-set/actions)
[![NPM VERSION](https://img.shields.io/npm/v/iconify-set.svg)](https://www.npmjs.com/package/iconify-set)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/iconify-set.svg)](https://www.npmjs.com/package/iconify-set)
[![CODECOV](https://codecov.io/github/ntnyq/iconify-set/branch/main/graph/badge.svg)](https://codecov.io/github/ntnyq/iconify-set)
[![LICENSE](https://img.shields.io/github/license/ntnyq/iconify-set.svg)](https://github.com/ntnyq/iconify-set/blob/main/LICENSE)

> Check if given string is an iconify icon set name.

## Install

```bash
npm install iconify-set
```

```bash
yarn add iconify-set
```

```bash
pnpm add iconify-set
```

## Usage

```ts
import { isIconifySetName } from 'iconify-set'

console.log(isIconifySetName('mdi')) // -> true
console.log(isIconifySetName('carbon')) // -> true

console.log(isIconifySetName('foobar')) // -> false
```

## Links

- [iconify](https://iconify.design/)
- [iconify-icon-set](https://github.com/iconify/icon-sets/tree/master/json)

## License

[MIT](./LICENSE) License © 2024-PRESENT [ntnyq](https://github.com/ntnyq)

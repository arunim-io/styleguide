# @arunim.io/eslint-config

![GitHub](https://img.shields.io/github/license/arunim-io/styleguide)
![npm](https://img.shields.io/npm/v/@arunim.io/eslint-config)

This package contains Arunim's [ESLint](https://eslint.org/) config with [Prettier](https://prettier.io/) support. It is part of [Arunim's Styleguide](https://github.com/arunim-io/styleguide/).

It comes with 5 flavours:

- javascript
- javascript-with-parser
- typescript
- typescript-with-parser - just some basic rules, but with [TypeScript](https://typescriptlang.org) support and a custom parser from [typescript-eslint](https://typescript-eslint.io/).
- astro - configuration for the awesome [Astro](https://astro.build/) framework.

## Installation

This package can easily be installed. Just use your package manager of choice, the following example uses pnpm:

```shell
pnpm add -D @arunim.io/eslint-config
```

For usage, please check the [configuration](#configuration) section.

## Configuration

### Javascript

This is the main configuration of this package. It is used by all other configurations.

It reuses rules from:

- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn/)
- [eslint-plugin-jsonc](https://ota-meshi.github.io/eslint-plugin-jsonc/)

#### Usage

```json
{
  "extends": "@arunim.io/eslint-config"
}
```

### javascript-with-parser

This config is as same as [javascript](#javascript) but with a custom parser setup.

It reuses the same rules specified in [javascript](#javascript).

#### Usage

```json
{
  "extends": "@arunim.io/eslint-config/javascript-with-parser"
}
```

### typescript

This config is as same as [javascript](#javascript) but with [TypeScript](https://typescriptlang.org) support.

It reuses the same rules specified in [javascript](#javascript) and also reuses rules from:

- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

#### Usage

```json
{
  "extends": "@arunim.io/eslint-config/typescript"
}
```

### typescript-with-parser

This config is as same as [typescript](#typescript) but with a custom parser from [typescript-eslint](https://typescript-eslint.io/) setup.

It reuses the same rules specified in [typescript](#javascript).

#### Usage

```json
{
  "extends": "@arunim.io/eslint-config/typescript-with-parser"
}
```

### astro

This is the configuration for the awesome [Astro](https://astro.build/) framework.

It extends from [typescript-with-parser](#typescript-with-parser) configurations and reuses rules from:

- [`eslint-plugin-astro`](https://ota-meshi.github.io/eslint-plugin-astro/)

#### Usage

```json
{
  "extends": "@arunim.io/eslint-config/astro"
}
```

## Got any issues or suggestions?

Please open an issue at https://github.com/arunim-io/styleguide/issues/new.

## License

This package is MIT licensed.

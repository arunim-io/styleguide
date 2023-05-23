# @arunim.io/prettier-config

![GitHub](https://img.shields.io/github/license/arunim-io/styleguide)
![npm](https://img.shields.io/npm/v/@arunim.io/prettier-config)

This package contains Arunim's [Prettier](https://prettier.io/) config. It is part of [Arunim's Styleguide](https://github.com/arunim-io/styleguide/).

It comes with 2 flavours:

- [base](#base)
- [astro](#astro)

## Installation

This package can easily be installed. Just use your package manager of choice, the following example uses pnpm:

```shell
pnpm add -D @arunim.io/prettier-config
```

For usage, please check the [configuration](#configuration) section.

## Configuration

### Base

This is the main configuration of this package. It is used by all other configurations.

It does not have any dependencies.

#### Usage

```cjs
module.exports = {
  ...require('@arunim.io/prettier-config'),
};
```

### Astro

This is the configuration for the awesome [Astro](https://astro.build/) framework.
It has all the options from the base configuration.

#### Dependencies

- [`prettier-plugin-astro`](https://github.com/withastro/prettier-plugin-astro)

#### Usage

```cjs
module.exports = {
  ...require('@arunim.io/prettier-config/astro'),
};
```

## Got any issues or suggestions?

Please open an issue at https://github.com/arunim-io/styleguide/issues/new.

## License

This package is MIT licensed.

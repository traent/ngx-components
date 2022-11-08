<h1 align="center">
  @traent/ngx-components
</h1>

<p align="center">
  <img width="250px" height="auto" src="https://traent.com/wp-content/uploads/2022/07/logo-color.svg">
</p>

<br />

> @traent/ngx-components is an Angular library that exposes both pure UI and domain components, directives and pipes used inside Traent.

In the future this library will integrate also other `@traent/ngx-` libraries.

> Important note: This library is actually under development and could have some further breaking changes.

## Compatibility with Angular Versions

| @traent/ngx-components | Angular        |
| ---------------------- | -------------- |
| 0.0.x                  | 14             |


## Installation

You can install it through **NPM**:

```bash
npm install @traent/ngx-components
```

This library offers multiple modules, trying to following the SCAM pattern.

So you will also need to import the specific module that you need in your `app.module`. For example:

```typescript
import { ClickToCopyModule } from '@traent/ngx-components';

@NgModule({
  imports: [ClickToCopyModule],
})
class AppModule {}
```

## API & Examples

Coming Soon.

## Building & Publishing

The building and publishing of this library to NPM is performed through an internal Organization flow that uses the standard Angular approach.

In the future, we will improve the tooling to allow everyone to build this library easily.

## License

`@traent/ngx-components` is available under the Apache-2 license. See the [LICENSE](./LICENSE) file for more info.

## Contributors

At the moment, contributions are not supported through Pull Request.
However, we truly appreciate any feedback made through the issue system.

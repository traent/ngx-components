<h1 align="center">
  @traent/ngx-components
</h1>

<p align="center">
  <img width="250px" height="auto" src="https://traent.com/wp-content/uploads/2022/07/logo-color.svg">
</p>

<br />

> @traent/ngx-components is an Angular library that exposes both pure UI and domain components, directives and pipes used in Traent project.

In the future this library will integrate also other `@traent/ngx-` libraries.

> Notice: This library is currently under development and might be subjected to breaking changes.

## Compatibility with Angular Versions

| @traent/ngx-components | Angular        |
| ---------------------- | -------------- |
| 0.0.x                  | 14             |


## Installation

You can install it via **NPM**:

```bash
npm install @traent/ngx-components
```

This library offers multiple modules, following the SCAM pattern.

So you might need to import also the specific modules in your `app.module`. For example:

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

We are open to any contributions and feedbacks.

# emeraldui

## A simple React UI Library

emeraldui is a simple, clean, and easy-to-use React UI Library. It's going to be the UI library that powers [Minecraft Manager](https://github.com/theemeraldtree/minecraft-manager) and any other future projects from theemeraldtree.

### Setting up emeraldui

#### Installing:

```bash
yarn add @theemeraldtree/emeraldui
```

Don't forget its required peer dependencies:

```bash
yarn add styled-components react-transition-group styled-transition-group
```

#### Using emeraldui:

emeraldui relies on styled-components' theme system.
It is recommended to wrap your root component with a styled-components ThemeProvider

```js
import { DarkTheme } from '@theemeraldtree/emeraldui';
<ThemeProvider theme={DarkTheme}>
  {/* the rest of your app goes here... */}
</ThemeProvider>;
```

### Building emeraldui

#### Run the Storybook component documentation:

```bash
git clone https://github.com/theemeraldtree/emeraldui
yarn
yarn storybook
```

#### Building emeraldui:

```bash
yarn build
```

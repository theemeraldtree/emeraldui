import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';
import { DarkTheme } from '../src/main';

// Options:
const themes = [
  {
    name: 'Dark',
    backgroundColor: '#000',
    ...DarkTheme
  }
];

addDecorator(withThemesProvider(themes));

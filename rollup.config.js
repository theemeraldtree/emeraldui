import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: ['react'],
  plugins: [
    resolve(),
    image(),
    commonjs({
      namedExports: {
        'node_modules/react-is/index.js': ['typeOf']
      }
      // namedExports is deprecated and supposedly handled automatically now
      // however it doesn't work with styled-components
      // Original namedExports usage: https://github.com/styled-components/styled-components/issues/1654
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    })
  ]
};

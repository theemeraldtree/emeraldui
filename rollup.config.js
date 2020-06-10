import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: ['react'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    image(),
    commonjs({
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    })
  ]
};

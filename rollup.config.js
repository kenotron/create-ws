import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'dist/create-ws.js',
    format: 'cjs',
    exports: 'default'
  },
  plugins: [
    nodeResolve(),
    commonjs()
  ]
};
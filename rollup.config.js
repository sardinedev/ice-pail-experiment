import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import sassBuild from './lib/sass.rollup';

const extensions = ['.js', '.ts'];

export default async function({ watch }) {
  await sassBuild();
  return {
    input: 'src/lazy-picture.ts',
    output: {
      file: 'lib/lazy-picture-esm.js',
      format: 'esm',
      assetFileNames: '[name]-[hash][extname]'
    },
    watch: {
      clearScreen: false,
      // Avoid watching intermediate files, else watch gets stuck in a loop.
      // 11ty source files are watched by eleventyPlugin.
      exclude: '.build-tmp/**/*.html'
    },
    plugins: [
      resolve({ extensions }),
      babel({
        extensions,
        exclude: 'node_modules/**' // only transpile our source code
      }),
      terser({ ecma: 8, module: true })
    ]
  };
}

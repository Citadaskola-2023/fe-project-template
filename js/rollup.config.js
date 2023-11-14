import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.ts',
    output: {
        file: '../public/build.js',
        format: 'es',
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        typescript(),
        postcss({
            extract: true, // Output the CSS to a separate file (optional)
            minimize: process.env.NODE_ENV === 'production', // Minify the CSS in production
            plugins: []
        })
    ],
    watch: {
        clearScreen: false,
    }
};

import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/useUnsplash.ts',
    output: [
        // {
        //     dir: 'dist',
        //     file: 'index.js',
        //     format: 'cjs',
        //     plugins: [terser()],
        // },
        {
            dir: 'dist',
            // file: 'index.esm.js',
            format: 'esm',
            plugins: [terser({ format: { comments: false } })],
        },
    ],
    plugins: [
        typescript({
            declaration: true,
            declarationDir: 'dist',
        }),
    ],
}

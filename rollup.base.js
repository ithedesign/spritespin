import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import sourcemaps from 'rollup-plugin-sourcemaps'
// import commonjs from '@rollup/plugin-commonjs'

import pkg from './package.json'

export default {
  input: 'lib/src/spritespin.ts',
  watch: {
    include: 'lib/**',
  },
  plugins: [
    resolve(),
    sourcemaps(),
    typescript({
      tsconfig: 'lib/tsconfig.json',
    }),
    replace({
      preventAssignment: true,
      VERSION_STRING: JSON.stringify(pkg.version),
    }),
  ],
}

import config from './rollup.base'

export default Object.assign({}, config, {
  output: {
    name: 'SpriteSpin',
    file: 'release/spritespin.js',
    format: 'umd',
    sourcemap: true,
  }
})
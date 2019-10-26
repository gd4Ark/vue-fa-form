const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  outputDir: 'example_dist',
  publicPath: isProd ? './' : '/',
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      sass: {
        data: `@import "~lib/styles/_app.scss";`
      }
    }
  },
  configureWebpack: {
    entry: './example/main.js',
    output: {
      libraryExport: 'default'
    },
    resolve: {
      // 设置别名
      alias: {
        lib: path.resolve(__dirname, './lib'),
        'vue-fa-form': path.resolve(__dirname, './lib')
      }
    }
  }
}

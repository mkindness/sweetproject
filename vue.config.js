const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@design': path.resolve(__dirname, 'src/assets/css/index.scss'),
        '@images': path.resolve(__dirname, 'src/assets/images'),
        '@plugins': path.resolve(__dirname, 'src/plugins'),
        '@router': path.resolve(__dirname, 'src/router'),
        '@state': path.resolve(__dirname, 'src/state'),
        '@tests': path.resolve(__dirname, 'tests'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@views': path.resolve(__dirname, 'src/views'),
      },
    },
  },
};

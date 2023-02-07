const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
      '@axios': path.join(path.resolve(__dirname, './src/axios')),
      '@containers': path.join(path.resolve(__dirname, './src/containers')),
      '@assets': path.join(path.resolve(__dirname, './src/assets')),
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@utils': path.join(path.resolve(__dirname, './src/utils')),
      '@hooks': path.join(path.resolve(__dirname, './src/hooks')),
      '@i18n': path.join(path.resolve(__dirname, './src/i18n')),
    }
  },
  plugins: [{ plugin: CracoLessPlugin }]
};

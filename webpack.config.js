module.exports = {
  headers: { 'Access-Control-Allow-Origin': '*' },
  resolve: {
    alias: {
      '@':   require('path').resolve(__dirname, 'src'),
      'vue': require('path').resolve(__dirname, 'node_modules/vue/dist/vue.esm.js'),
    },
  },
};

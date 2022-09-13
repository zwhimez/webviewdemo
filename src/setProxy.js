const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://10.138.37.175:8000',
      changeOrigin: true,
      secure: false,
    })
  );
};
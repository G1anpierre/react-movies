const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://www.omdbapi.com',
      changeOrigin: true,
    }),
  )

  app.use(
    createProxyMiddleware('/all-movies', {
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  )
}

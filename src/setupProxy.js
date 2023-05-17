const proxy = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        proxy("/products", {
            target: "https://api-restaurante-teste.vercel.app",
            changeOrigin: true
        })
    )
}
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://testeur-app.zkcl3814.odns.fr',
          changeOrigin: true,
          secure: false, // Ignorer la vérification SSL dans le proxy
        }
      }
    }
  }
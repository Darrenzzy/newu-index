module.exports = {
    configureWebpack: {
    //   plugins: [
    //     new MyAwesomeWebpackPlugin()
    //   ]
        devServer: {
           proxy: {
                // '/api/': {
                //     target: 'https://securityin.com',
                //     changeOrigin: true,
                //     pathRewrite: {
                //     '^': '',
                //     },
                // }
            }
        }
    }
  }
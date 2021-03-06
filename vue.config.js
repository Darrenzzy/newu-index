module.exports = {
    configureWebpack: {
    //   plugins: [
    //     new MyAwesomeWebpackPlugin()
    //   ]
        devServer: {
            proxy: {
                '/api/': {
                    target: 'http://119.28.10.43:9500',
                    changeOrigin: true,
                    pathRewrite: {
                    '^': '',
                    },
                }
            }
        },
        module: {
            rules: [{
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                //   'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                    }
                  },
                ],
            }]
        }
    }
}
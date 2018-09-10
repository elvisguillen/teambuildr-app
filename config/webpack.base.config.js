const HTMLWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      },   
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV != 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "resolve-url-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },  
    ]
  },
  devServer: {
    proxy: {
      '/api/2.0/*': {
        target: 'https://staging.app.teambuildr.com/api/2.0/',
        changeOrigin: true,
        pathRewrite: {
          '^/api/2.0': ''
        }
      }
    }
    // proxy: {
    //   '/api/*': {
    //     target: 'https://reqres.in/api',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
    // new GoogleFontsPlugin({
		// 	fonts: [
		// 		{ family: "Nunito" }
		// 	]
		// })
  ]

};
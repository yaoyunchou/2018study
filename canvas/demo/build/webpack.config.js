const  htmlWebpackPlugin = require('html-webpack-plugin')
const  MiniCssExtractPlugin = require('mini-css-extract-plugin')
const  path = require('path')


console.log(path.resolve(__dirname, '../src/index.ts'));
module.exports = {
     entry: [path.resolve(__dirname, '../src/index.ts'),path.resolve(__dirname, '../src/assets/stylesheet/index.scss'),],
     output:{
         path:path.resolve(__dirname,'../dist'),
         filename:'js/index.js'
     },
     plugins:[
        new htmlWebpackPlugin({
            thempalte:path.resolve(__dirname, '../index.html'),
            inject: 'head'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
     ],
     module: {
        rules: [
            { 
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                  ],        
            }
        ]
      }
}
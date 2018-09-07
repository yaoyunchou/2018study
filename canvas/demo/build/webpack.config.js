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
            inject: 'head',
            template:path.resolve(__dirname,'index.html'),
        }),
        new htmlWebpackPlugin({
            inject: 'head',
            template:path.resolve(__dirname,'index.html'),
            filename:'demos.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
     ],
     // 此处添加配置
     resolve: {
        extensions: ['.ts', '.tsx'] ,
        modules: ['src' ,'node_modules']
     } , 
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
      },
    devtool:'source-map'
}
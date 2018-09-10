const  htmlWebpackPlugin = require('html-webpack-plugin')
const  MiniCssExtractPlugin = require('mini-css-extract-plugin')
const  path = require('path')

module.exports = {
     entry:{
        demo01: [path.resolve(__dirname, '../src/demos/demo01.ts'), path.resolve(__dirname, '../src/assets/stylesheet/index.scss') ],
        rectangle: [path.resolve(__dirname, '../src/demos/demo02.ts'), path.resolve(__dirname, '../src/assets/stylesheet/index.scss') ],    
        star: [path.resolve(__dirname, '../src/demos/demo03.ts'), path.resolve(__dirname, '../src/assets/stylesheet/index.scss') ],    
     },
     output:{
         path:path.resolve(__dirname,'../dist'),
         filename:'js/[name].js'
     },
     plugins:[
        new htmlWebpackPlugin({
            inject: 'head',
            template:path.resolve(__dirname,'index.html'),
            filename:'demo01.html',
            chunks:['demo01']
        }),
        new htmlWebpackPlugin({
            inject: 'head',
            template:path.resolve(__dirname,'index.html'),
            filename:'rectangle.html',
            chunks:['rectangle']

        }),
        new htmlWebpackPlugin({
            inject: 'head',
            template:path.resolve(__dirname,'index.html'),
            filename:'star.html',
            chunks:['star']

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
const  htmlWebpackPlugin = require('html-webpack-plugin')
const  MiniCssExtractPlugin = require('mini-css-extract-plugin')
const  path = require('path')

module.exports = {
     entry:{
        demo01: [path.resolve(__dirname, '../src/demos/demo01.ts'), path.resolve(__dirname, '../src/assets/stylesheet/index.scss') ],
        rectangle: [path.resolve(__dirname, '../src/demos/demo02.ts'), path.resolve(__dirname, '../src/assets/stylesheet/index.scss') ], 
        star: [path.resolve(__dirname, '../src/demos/demo03.ts'), path.resolve(__dirname, '../src/assets/stylesheet/index.scss') ],    
        allstar: [path.resolve(__dirname, '../src/demos/demo04.ts'), path.resolve(__dirname, '../src/assets/stylesheet/index.scss') ], 
        shadow: [path.resolve(__dirname, '../src/demos/demo05.ts'), path.resolve(__dirname, '../src/assets/stylesheet/index.scss') ],
        curve: [path.resolve(__dirname, '../src/demos/demo06.ts'), path.resolve(__dirname, '../src/assets/stylesheet/index.scss') ],
        
     },
     output:{
         path:path.resolve(__dirname,'../canvas'),
         filename:'js/[name].js'
     },
     plugins:[
         //
        new htmlWebpackPlugin({
            inject: 'head',
            template:path.resolve(__dirname,'index.html'),
            filename:'demo01.html',
            chunks:['demo01']
        }),
        //绘制矩形
        new htmlWebpackPlugin({
            inject: 'head',
            template:path.resolve(__dirname,'index.html'),
            filename:'rectangle.html',
            chunks:['rectangle']

        }),
        // 绘制五角星  和星空
        new htmlWebpackPlugin({
            inject: 'head',
            template:path.resolve(__dirname,'index.html'),
            title:'绘制五角星  和星空',
            filename:'star.html',
            chunks:['star']

        }),
         // 实现渐变的星空
         new htmlWebpackPlugin({
            inject: 'head',
            template:path.resolve(__dirname,'index.html'),
            filename:'allstar.html',
            title:'实现渐变的星空',
            chunks:['allstar']

        }),
        // 实现阴影等效果
        new htmlWebpackPlugin({
            inject: 'head',
            template:path.resolve(__dirname,'index.html'),
            filename:'shadow.html',
            title:'实现阴影等效果',
            chunks:['shadow']

        }),
         // 实现曲线
         new htmlWebpackPlugin({
            inject: 'head',
            template:path.resolve(__dirname,'index.html'),
            filename:'curve.html',
            title:'实现曲线',
            chunks:['curve']
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
    devtool:'source-map',
    watchOptions: {
        poll: 1000
      }
}
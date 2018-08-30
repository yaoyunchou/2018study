const  htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
     entry:__dirname+'/src/index.ts',
     output:{
         path:__dirname+'/dist/js',
         filename:'index.js'
     },
     plugins:[
        new htmlWebpackPlugin({
            thempalte:'index.html'
        })
     ]
}
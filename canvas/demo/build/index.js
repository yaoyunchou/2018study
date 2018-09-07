const rm = require('rimraf');
const path = require('path');
const webpack = require('webpack');
//相关的配置文件

const webpackConfig = require('./webpack.config');



rm(path.resolve(__dirname,'../dist'),err =>{
    if(err){
        console.error(err);
        throw err;
    }
    webpack(webpackConfig,(err,stats) =>{
        if(err){
            console.error(err);
            throw err;
        }
        if(stats.hasErrors()){
            console.error('  Build failed with errors.\n')
            process.exit(1);
        }

    })
    
})
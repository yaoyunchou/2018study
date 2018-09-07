/**
 * 为入口文件  
 * 约定DOM对象统一用jquery对象进行替换
 * 
 * 
 */


import {hello} from './hello';
import $ from 'jquery'


import {DrayStar} from './demos'
// 页面加载完成后再获取
$(function(){
    hello('yaoyunchou');

    // 获取canvas对象
    let canvas:any = $('.myCanvas')[0];
    let ctx = canvas.getContext('2d')
    new  DrayStar(ctx).dray();
    console.log('jquery加载完成-----'+$);
})
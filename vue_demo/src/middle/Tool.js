//可复用工具函数仓库
export default {
  //清除当前字符串首位空格
  trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "")
  },
  //兼容性的获取当前浏览器语言版本，默认为英文模式
  getLang(){
    if(window.navigator){
      if(Object.prototype.toString.call(navigator.languages) === '[object Array]' ){
        if(navigator.languages[0]){
          return navigator.languages[0].substr(0,2)
        }
      }
    }
    return 'en'
  },
  //将滚动条滚动到顶部
  scrollTop(){
    let scTop = document.body.scrollTop || document.documentElement.scrollTop;
    let setiner = setInterval(function(){
      //scTop =scTop-10;// 匀速移动到顶部
      scTop =scTop*9/10;
      if(scTop>1){
        window.scrollTo(0,scTop);
      }else{
        window.scrollTo(0,0);
        clearInterval(setiner);
      }
    },10);
  }
  
}
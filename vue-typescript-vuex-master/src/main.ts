// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
import VueScroller from 'vue-scroller';
import MyButton from './components/mybutton';
import RestoreScroller from './common/restore-scroller'
// import VueScroll from 'vue-rescroll';

Vue.config.productionTip = false;

Vue.use(Toast, {
  defaultType: 'bottom',
  duration: 1000,
  wordWrap: true,
  width: '170px'
});
Vue.use(VueScroller);
Vue.use(MyButton);
Vue.use(RestoreScroller);
// Vue.use(VueScroll);


import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el:any) {
    // 聚焦元素
    el.focus()
  }
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

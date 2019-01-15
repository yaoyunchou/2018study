import Vue from 'vue';
// 使用国际化语言包插件
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// 引入语言包
import CN from '@/language/zh/index.js';
import EN from '@/language/en/index.js';
// 引入样式
import '@/assets/style/base.scss';
// require styles
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
 

Vue.use(VueAwesomeSwiper, /* { default global options } */)
// 国际化
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'cn',
  messages: {
    // 引入中文语言包
    cn: CN,
    // 引入英文语言包
    en: EN,
  },
});
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');

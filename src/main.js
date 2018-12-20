import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false;
//解决移动端点击300ms延迟
fastClick.attach(document.body);

Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

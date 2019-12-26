import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import i18n from './i18n/i18n'

Vue.config.productionTip = false

Vue.filter('formatTime', value => {
  if (!value) {
    return '';
  } else {
    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let result = year + "-" + month + "-" + day;
    return result;
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

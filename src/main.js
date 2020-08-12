import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Axios from './axios';
import i18n from './i18n';

Vue.config.productionTip = false
Vue.prototype.$Axios = Axios;

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')

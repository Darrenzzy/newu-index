import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Axios from './axios';
import i18n from './i18n';
import less from 'less'
import './plugins/element.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.filter('formateTime', function (dateString) {
  if(dateString){
    var arr = dateString.split("T");
    var d=arr[0];
    var darr = d.split('-');
    var t=arr[1];

    var tarr = t.split('.000');
    var marr = tarr[0].split(':');

    darr.map(item=>{
        if (item < 10) {
            item += "0";
        }
    })
    if (parseInt(marr[2]) < 10) {
        marr[2] = "0" + parseInt(marr[2]);
    } else {
        marr[2] = + parseInt(marr[2]);
    }
    // var timeStamp = parseInt(darr[0])+"-"+parseInt(darr[1])+"-"+parseInt(darr[2])+" "+parseInt(marr[0])+":"+parseInt(marr[1])+":"+parseInt(marr[2]);
    var timeStamp = darr[0] +"-"+ darr[1] +"-"+ darr[2]+" "+ marr[0] +":"+ marr[1]+ ":" + marr[2];
        
    return timeStamp; 
  } else {
      return ""
  }
})


Vue.use(less);
Vue.config.productionTip = false
Vue.prototype.$Axios = Axios;


new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')

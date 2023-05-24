import Vue from 'vue'
import App from './App.vue'
import Mx from "mxdraw"
Vue.config.productionTip = false

Mx.loadCoreCode().then(()=> {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
  
})

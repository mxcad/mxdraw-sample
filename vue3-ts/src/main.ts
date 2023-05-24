import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadCoreCode } from "mxdraw"

// 初始化mxdraw库.
loadCoreCode().then(()=> {
    createApp(App).use(router).mount('#app')
})


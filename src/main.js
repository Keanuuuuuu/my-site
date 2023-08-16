import "./mock";
// 在mock的index中专门导入数据

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/global.less"
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

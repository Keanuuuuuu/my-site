// import "./mock";
// 在mock的index中专门导入数据

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/global.less"
import showMessage from "./utils/showMessage";
import "./eventBus"
Vue.prototype.$showMessage = showMessage;
Vue.config.productionTip = false

// 注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);
import vLazy from "./directives/lazy";
Vue.directive("lazy", vLazy);

// 应用初始化时获取全局设置
store.dispatch("settings/getData");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

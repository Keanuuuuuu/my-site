// 当模块使用$on绑定事件时：比如给 eventName = a事件绑定 handler = funca功能
// 那么a事件的值为funca，并且a为Set集合，意味着再次绑定funca就会重复
const listeners = {}

// 自己来做一个事件总线对象：

// export default {
//   // 首先它需要有监听某个事件的功能
//   $on(eventName, handler){
//     if(!listeners[eventName]){
//       listeners[eventName] = new Set()
//     }
    
//   },
//   $off(eventName, handler){
//     if(!listeners[eventName]){
//       return
//     }
//     listeners[eventName].delete(handler)
//   },
//   // 需要有触发（抛出）这个事件的功能，当事件触发，监听该事件的模块与组件需要做出动作
//   $emit(eventName, ...args){
//     if(!listeners[eventName]){
//       return
//     }
//     for(const handler of listeners[eventName]){
//       handler(...args)
//     }
//   }
// }

// 在外部的测试代码：
// 测试事件总线
// import eventBus from "./eventBus";

// function handler1(data) {
//   console.log("handler1", data);
// }
// function handler2(data) {
//   console.log("handler2", data);
// }
// eventBus.$on("event1", handler1);
// eventBus.$on("event1", handler2);
// eventBus.$on("event2", handler1);

// window.eventBus = eventBus;
// eventBus.$emit('event1', 123) 
/* 输出： 
handler1 123
handler2 123 
*/ 



/* 
 以上就是手写实现事件总线，但是在公司里经常会这样写：
*/

import Vue from 'vue'

// export default new Vue({})
Vue.prototype.$bus = new Vue({})

export default new Vue({})

/* 
  因为一个空的Vue实例身上就有写好了的$emit、$on、$off实例成员
  我直接把这个Vue实例导出，在外面用的时候就像是导出上面那个手写的事件总线对象一样
*/
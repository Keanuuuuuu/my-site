<template>
  <div id="app" class="app-container">
    <div class="is" @click="isShowSideBar" ref="is">
      <img src="../public/ishow.png" alt="">
    </div>
    <Layout>
      <template #left>
        <!-- <transition name="changeShow" appear> -->
          <div class="aside" v-show="is">
            <SideBar />
          </div>
        <!-- </transition> -->
      </template> 
      <template #default>
          <div class="main">
            <router-view />
          </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import Layout from './components/Layout'
import Home from './views/Home.vue';
export default {
  name:'App', // 如果该组件是不需要注册就能使用，或者在注册的时候没有指定名称，则组件使用该名称
  components: {
    SideBar,
    Layout,
    Home
},
  data() {
    return {
      is: true
    }
  },
  methods: {
    isShowSideBar(){
      this.is = !this.is
      this.$refs.is.style.left = this.$refs.is.style.left === 0 || this.$refs.is.style.left === "0px"? "250px":0;
    }
  },
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
.app-container{
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
  // border: 2px solid;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: auto;
}
.is{
  position: fixed;
  left: 250px;
  top: 0;
  width: 30px;
  height: 30px;
  z-index: 999;
  cursor: pointer;
  transition: all 0.5s;
  img{
    width: 100%;
  }
}

.changeShow-enter-active {
  animation: changeShow 0.3s;
}
.changeShow-leave-active {
  animation: changeShow 0.3s reverse;
}
@keyframes changeShow {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>

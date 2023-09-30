<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SideBar />
        </div>
      </template> 
      <template #default>
          <div class="main">
            <router-view />
          </div>
      </template>
    </Layout>
  <!-- <Home/> -->
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

    }
  },
  methods: {

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
  border: 2px solid;
  margin: 0 auto;
  overflow: auto;
}
</style>

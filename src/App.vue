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
          
        </div>
    </template>
    </Layout>
  </div>
</template>

<script>
import Avatar from './components/Avatar'
import Icon from "./components/Icon"
import Pager from './components/Pager'
import Empty from './components/Empty'
import ImageLoader from "./components/ImageLoader"
import SideBar from './components/SideBar'
import Layout from './components/Layout'
export default {
  name:'App', // 如果该组件是不需要注册就能使用，或者在注册的时候没有指定名称，则组件使用该名称
  components: {
    Avatar,
    Icon,
    Pager,
    Empty,
    ImageLoader,
    SideBar,
    Layout
  },
  data() {
    return {
      current: 1
    }
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log("加载当前页数据",newPage);
    },
    handleLoaded(){
      console.log("加载图片");
    }
  },
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
.app-container{
  .self-fill(fixed);
}

.imageLoader{
  width: 400px;
  height: 200px;
  margin: 0 20px;
}

.sidebar {
  width: 300px;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
  overflow: auto;
}
</style>

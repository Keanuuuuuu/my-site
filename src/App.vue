<template>
  <div id="app">
    <Avatar url="https://avatars.githubusercontent.com/u/93373675?s=48&v=4" 
    :width="100" 
    :height="100"
    ></Avatar>

    <Icon type="home"></Icon>

    <Pager :total="100" :limit="5" :visibleNumber="30" :current="current"
      @pageChange="handlePageChange"
    ></Pager>

    <Empty />

    <div class="imageLoader">
      <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="handleLoaded"
    />
    </div>

    <div class="sidebar">
      <SideBar />
    </div>

  </div>
</template>

<script>
import Avatar from './components/Avatar'
import Icon from "./components/Icon"
import Pager from './components/Pager'
import Empty from './components/Empty'
import ImageLoader from "./components/ImageLoader";
import SideBar from './components/SideBar'
export default {
  name:'App', // 如果该组件是不需要注册就能使用，或者在注册的时候没有指定名称，则组件使用该名称
  components: {
    Avatar,
    Icon,
    Pager,
    Empty,
    ImageLoader,
    SideBar
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

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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

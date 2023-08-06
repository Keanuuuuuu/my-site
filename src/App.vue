<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <Avatar url="https://avatars.githubusercontent.com/u/93373675?s=48&v=4" 
    :width="100" 
    :height="100"
    ></Avatar>

    <Icon type="home"></Icon>
  </div>
</template>

<script>
import Avatar from './components/Avatar.vue'
import Icon from "./components/Icon.vue";

export default {
  name:'App', // 如果该组件是不需要注册就能使用，或者在注册的时候没有指定名称，则组件使用该名称
  components: {
    Avatar,
    Icon,
  }
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
</style>

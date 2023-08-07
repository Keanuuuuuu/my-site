<template>
  <div class="site-aside-container">
    <Avatar url="https://avatars.githubusercontent.com/u/93373675?v=4" :width="100" :height="100"/>
    <h1 class="title">Keanu</h1>
    <Menu></Menu>
    <Contact />
    <p class="footer">
      皖ICP备17001719号
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>

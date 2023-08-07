<template>
  <div class="imageLoader-container">
    <img :src="placeholder" class="placeholder" v-if="!everythingDone" alt="">
    <!-- load是img的事件，为加载事件，加载完成之后规定时间后触发handle事件去发送消息 -->
    <img 
      @load="handleLoad"
      :src="src"
      alt=""
      :style="{
        opacity: itsTimeToUnopacity,
        transition: `${duration}ms`
      }"
    >
  </div>
</template>

<script>
export default {
 props: {
  src: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 500
  }
 },
 data() {
  return {
    everythingDone: false,
    originLoaded: false
  }
 },
 computed: {
  itsTimeToUnopacity() {
    return this.originLoaded ? 1 : 0;
  },
 },
 methods: {
  handleLoad(){
    this.originLoaded = true
    setTimeout(()=>{
      this.everythingDone = true
      this.$emit('load')
    },this.duration)
  }
 }
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";

.imageLoader-container {
  width: 100%;
  // 宽高为百分比可以适应父容器的宽高
  height: 100%;
  position: relative;
  overflow: hidden;
  // 防止图片的虚化边缘超出盒子
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
    // css3样式，让第一张这个模糊的照片虚化一些
  }
}
</style>
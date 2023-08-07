<template>
    <div class="layout-container">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="main">
        <slot></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped lang="less">
  .layout-container {
    width: 100%;
    height: 100%;
    // 撑满父元素
    display: flex;
    // 三部分内容横向排列变成弹性盒
    .left,
    .right {
      flex: 0 0 auto;
      // 不可压缩
      overflow: hidden;
    }
    .main {
      flex: 1 1 auto;
      // 主区域可以增长压缩
      overflow: hidden;
    }
  }
  </style>
  
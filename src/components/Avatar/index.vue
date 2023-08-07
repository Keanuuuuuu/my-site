<template>
  <img
    class="avatar-img" 
    :src="url" 
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, // url属性必须是一个字符串
      require: true // 属性必传
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  }
}
</script>

<style scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
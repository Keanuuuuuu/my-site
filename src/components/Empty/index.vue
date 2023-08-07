<template>
	<div class="empty-container">
		<Icon type="empty" />
    <p>{{ text }}</p>
	</div>
</template>

<script>
import Icon from '../Icon'
export default {
	components: {
		Icon
	},
  props: {
    text: {
      type: String,
      default: '无数据'
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
@import "~@/style/var.less";
.empty-container {
  .self-center();
  // 在父元素中居中
  color: @gray;
  text-align: center;
}
.icon-container {
  font-size: 72px;
}
</style>
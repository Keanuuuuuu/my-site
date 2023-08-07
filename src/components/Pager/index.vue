<template>
	<div class="pager-container" v-if="pageNumber > 1">
		<a :class="{ disabled: current === 1 }" @click="handleClick(1)">|&lt;&lt;</a>
		<a :class="{ disabled: current === 1 }" @click="handleClick( current - 1 )">&lt;&lt;</a>

		<a 
			v-for="(n, index) in numbersArr" 
			:key="index" 
			:class="{ active: n === current }"
			@click="handleClick(n)"
		>{{ n }}</a>

		<a :class="{ disabled: current === pageNumber }" @click="handleClick( current + 1 )">&gt;&gt;</a>
		<a :class="{ disabled: current === pageNumber }" @click="handleClick( pageNumber )">&gt;&gt;|</a>
	</div>
</template>

<script>
export default {
	props: {
		current: {
			type: Number,
			default: 1
		},
		total: { 
			// 总数据量
			type: Number,
			default: 0
		},
		limit: {
			// 页容量，每一页含有数据量
			type: Number,
			default: 10
		},
		visibleNumber: {
			// 可见页码数
			type: Number,
			default: 10
		}
	},
	computed:{
		pageNumber(){
			return Math.ceil( this.total / this.limit )
		},

		// 以下三个计算属性的目的是，首先每次选择的页标签要在显示数组的正中间

    // 得到显示的最小数字是关键
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
		numbersArr(){
			let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
		}
	},
	methods:{
		handleClick(newPage){
			if(newPage < 1){

			}
			// 如果发生改变页标事件，向父组件抛出最新的页码，让父组件去改变，而不是说我们来改变传入的props值，因为这个传递是单向的
			this.$emit("pageChange", newPage);
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../style/var.less';
.pager-container {
	display: flex;
	justify-content: center;
	margin: 20px 0;
	a {
		color: @primary;
		margin: 0px 6px;
		cursor: pointer;
		&.disabled {
			color: @lightWords;
			cursor: not-allowed;
		}
		&.active {
			color: @words;
			cursor: pointer;
			font-weight: bold;
		}
	}
}
</style>
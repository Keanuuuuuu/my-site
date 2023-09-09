<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "@/components/RightList";
import { debounce } from "@/utils";
export default {
  data(){
    return {
      activeAnchor: "",
    }
  },
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  created(){
    // this.$bus.$on("mainScroll", this.setSelect) // 这样写的话由于绑定的事件是滚动事件，触发的很频繁，我不想处理的也那么频繁，我做一防抖
    this.$bus.$on("mainScroll", debounce(this.setSelect, 50))
  },
  destroyed() {
    this.$bus.$off("mainScroll", debounce(this.setSelect, 50));
  },
  computed:{
    tocSelect(){
      const getToc = (toc = [])=>{
        return toc.map((t)=>{
          return {
            ...t,
            isSelect:t.anchor === this.activeAnchor,
            children:getToc(t.children)
          }
        })
      }
      return getToc(this.toc)
    },
    // 根据锚链接所带有的ID去获取dom元素们
    doms(){
      const doms = []
      const getDoms = (toc = [])=>{
        for(const t of toc){
          const dom = document.getElementById(t.anchor)
          doms.push(dom)
          if(t.children && t.children.length){
            getDoms(t.children)
          }
        }
      }
      getDoms(this.toc)
      return doms
    }
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
      // 改变锚链接就是改变地址栏的hash值：http://localhost:8080/blog/b4C49Ff2-5Dc3-DA67-dcd8-eDC56d73c458#article-md-title-4
    },
    setSelect(){
      // 此方法用来正确根据页面元素来设置activeAnchor
      const range = 200
      this.activeAnchor = ""; // 由于后续要重新设置，先清空之前的状态
      for(const dom of this.doms){
        const top = dom.getBoundingClientRect().top
        if(top > 0 && top < range){
          this.activeAnchor = dom.id
          // 精准的在指定范围内遍历到dom元素
          return
        }else if(top > range){
          // 在下面
          return 
        }else{
          // 当前遍历的元素已经跑到上面去了
          this.activeAnchor = dom.id
        }
      }
    }
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>

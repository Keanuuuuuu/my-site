<template>
    <Layout>
      <div ref="mainContainer" class="main-container" v-loading="isLoading">
        <BlogDetail :blog="data" v-if="data" />
        <BlogComment v-if="!isLoading" />
      </div>
      <template #right>
        <div class="right-container" v-loading="isLoading">
          <BlogToc :toc="data.toc" v-if="data" />
        </div>
      </template>
    </Layout>
</template>

<script>
import { getBlog } from '@/api/blog';
import fetchData from '@/mixins/fetchData';
import Layout from '@/components/Layout'
import BlogDetail from './components/BlogDetail'
import BlogToc from './components/BlogToc'
import BlogComment from './components/BlogComment'
export default {
  mixins:[fetchData(null)],
  components:{
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment
  },
  methods:{
    async fetchData (){
      const a = await getBlog(this.$route.params.id)
      console.log(a);
      return a
    },
    handler(){
      this.$bus.$emit("mainScroll", this.$refs.mainContainer)
    }
  },
  mounted(){
    this.$refs.mainContainer.addEventListener('scroll', this.handler)
  },
  beforeDestroy() {
    this.$refs.mainContainer.removeEventListener("scroll", this.handler);
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
}
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100vh;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from '@/components/RightList'
import fetchData from "@/mixins/fetchData.js"
import { getBlogCategories } from "@/api/blog.js"
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce((a, b) => a + b.articleCount,0);
      // 利用每个文章分类中含有的文章数量计算文章总数

      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        // 在原始data数组的头部添加一个“全部”，把他的分类设为-1，获取全部文章
        ...this.data,
        // 之后原始data再在这里展开
      ];
      // 在最后做一个映射，根据路由里的分类id，来确定数组里哪一个iselsect为true
      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
        aside: `${it.articleCount}篇`,
      }));
      // 由于categoryId是响应式的，所以list也是响应式的
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelect(item) {
      console.log(item);
      const query = {
        page: 1,
        // 改变分类后，页码要回到第一页
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  background-color:rgba(242, 240, 240, 0.547);
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
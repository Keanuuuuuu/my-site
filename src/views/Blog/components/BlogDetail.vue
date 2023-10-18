<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期: {{ formDate(blog.createDate) }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
      <router-link :to="{
        name: 'CategoryBlog',
        params:{
          categoryId: blog.category.id
        },
      }
      ">{{ blog.category.name }}</router-link>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
    <!-- 添加markdown-body类名，配合css文件完善样式 -->
  </div>
</template>

<script>
import { formDate } from "@/utils";
import "highlight.js/styles/github.css";
import "@/style/markdown.css";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formDate,
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
.blog-detail-container{
  margin: auto 40px;
}
.markdown-body {
  margin: 2em 0;
}
</style>

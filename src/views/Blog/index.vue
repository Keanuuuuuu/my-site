<template>
  <Layout>
    <!-- 在Layout布局组件中：主区域就是BlogList，右边就是BlogCategory -->
    <BlogList></BlogList>
    <template #right>
      <BlogCategory></BlogCategory>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import BlogList from './components/BlogList.vue'
import BlogCategory from './components/BlogCategory.vue'
export default {
  components: {
    Layout,
    BlogCategory,
    BlogList
  }
}
</script>

<style>

</style>
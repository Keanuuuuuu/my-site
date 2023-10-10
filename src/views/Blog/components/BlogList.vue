<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id" class="bac_li">
        <div class="thumb" v-if="item.thumb">
          <router-link :to="{
            name: 'Detail',
            params: {
              id: item.id
            }
          }">
            <img
              v-lazy="item.thumb"
              :alt="item.title"
              :title="item.title"
            />
          </router-link>
        </div>
        <div class="main">
          <router-link :to="{
            name: 'Detail',
            params: {
              id: item.id
            }
          }">
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ formDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <router-link :to="{
              name: 'CategoryBlog',
              params:{
                categoryId: item.category.id
              },
            }" class="">{{ item.category.name }}</router-link>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager 
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumbr="10"
      @pageChange="pageChange"
    ></Pager>
  </div>
</template>

<script>
import Pager from "@/components/Pager"
import fetchData from '@/mixins/fetchData.js'
import { getBlogs } from '@/api/blog.js'
import { formDate } from '@/utils'
import eventBus from "@/eventBus"
export default {
  mixins:[fetchData({})],
  components: {
    Pager
  },
  mounted(){
    this.$refs.container.addEventListener("scroll", this.handleMainScroll);
  },
  methods: {
    formDate,
    async fetchData(){
      // console.log(this.routeInfo.categoryId);
      return await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId)
    },
    pageChange(newPage){
      if(newPage === this.routeInfo.page){
        // 这个好像是路由的问题，不能在当前路由下，再push当前路由
        return
      }
      // 改变分页就要去改变路由，以至于可以跳转到当前的分类id 当前页容量 当前页码
      if(this.routeInfo.categoryId === -1){
        // 表示当前没有分类，跳转到：
        this.$router.push({
          name: 'Blog',
          query: {
            page: newPage,
            limit: this.routeInfo.limit
          }
        })
      }else{
        this.$router.push({
          name: 'CategoryBlog',
          params:{
            categoryId: this.routeInfo.categoryId
          },
          query: {
            page: newPage,
            limit: this.routeInfo.limit
          }
        })
      }
    },
    handleMainScroll(){
      eventBus.$emit("mainScroll", this.$refs.container)
    }
  },
  computed:{
    // 用来获取计算路由信息：
    routeInfo(){
      // params为路由里的一个属性，里面记载了这次路由中的一些参数信息
      const categoryId = +this.$route.params.categoryId || -1 // 获取分类信息，如果没有，则置为-1表示获取所有的文章，不用分类了
      const page = +this.$route.query.page || 1
      const limit = +this.$route.query.limit || 10

      return {
        categoryId,
        page,
        limit
      }
    }
  },
  watch: {
    async $route() {
      this.isLoading = true;
      // 滚动高度为0
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      background-color:rgba(242, 240, 240, 0.863);
      margin: 10px;
      padding: 10px;
      border-radius: 8px;
      box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
      transition: all 0.5s;
      -webkit-transition: all 0.5s;
    }
    li:hover{
      transform: scale(1.05);
      box-shadow: -1px 1px 5px #000;
      color: inherit;
    }
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>

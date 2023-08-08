<template>
    <nav class="menu-container">
      <router-link
        v-for="item in items"
        :exact="item.exact"
        :key="item.link"
        :to="item.link"
        :class="{
          selected: isSelected(item),
        }"
      >
        <div class="icon">
          <Icon :type="item.icon" />
        </div>
        <span>{{ item.title }}</span>
    </router-link>
    </nav>
  </template>
  
  <script>
  import Icon from "@/components/Icon"
  export default {
    components: {
      Icon,
    },
    data() {
      return {
        items: [
          {
            link: "/",
            title: "首页",
            icon: "home",
            exact: true
          },
          {
            link: "/blog",
            title: "文章",
            icon: "blog",
            // startWith: true, 
            // 只要当前路径以link开头，当前菜单就是选中的，保证了/blog/artical1、/blog/artical2都属于文章这一类

            exact: false
            // 这里配合着路由，为假表示不需要精确匹配
          },
          {
            link: "/about",
            title: "关于我",
            icon: "about",
            exact: true
          },
          {
            link: "/project",
            title: "项目&效果",
            icon: "code",
            exact: true
          },
          {
            link: "/message",
            title: "留言板",
            icon: "chat",
            exact: true
          },
        ],
      };
    },
    methods: {

    // 这个方法因为路由的exact也用不到了

      isSelected(item) {
        // 这个函数的主要用途就是体现，我列表菜单当前选择的是哪一个
        // 可以根据路径来判断，比如：loaclhost/about就是关于我
        
        var link = item.link.toLowerCase(); // 菜单的链接地址
        var curPathname = location.pathname.toLowerCase(); // 当前浏览器的访问路径
        if (item.startWith) {
          return curPathname.startsWith(link);
        } else {
          return curPathname === link;
        }
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  @import "~@/style/var.less";
  .menu-container {
    color: @gray;
    margin: 24px 0;
    a {
      &.router-link-active {
        background: darken(@words, 3%);
      }
      padding: 0 50px;
      display: block;
      display: flex;
      align-items: center;
      height: 45px;
      .icon {
        width: 24px;
      }
      &:hover {
        color: #fff;
      }
    }
  }
  </style>
  
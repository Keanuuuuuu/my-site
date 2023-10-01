import Home from "../views/Home";
import About from "../views/About";
import Blog from "../views/Blog";
import Project from "../views/Project";
import Message from "../views/Message";
import Detail from "../views/Blog/Detail"

export default [
  {
    name: "Home", path: "/", component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    name: "About", path: "/about", component: About,
    meta: {
      title: "关于我"
    }
  },
  {
    name: "Blog", path: "/blog", component: Blog,
    meta: {
      title: "博客"
    }
  },
  {
    name: "CategoryBlog", path: "/blog/cate/:categoryId", component: Blog,
    meta: {
      title: "博客"
    }
  },
  {
    name: "Detail", path: "/blog/:id", component: Detail,
    meta: {
      title: "博客"
    }
  },
  {
    name: "Project", path: "/project", component: Project,
    meta: {
      title: "项目&效果"
    }
  },
  {
    name: "Message", path: "/message", component: Message,
    meta: {
      title: "留言"
    }
  },
]
<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe
      v-if="src"
      class="about-content"
      :src="src"
      frameborder="0"
      @load="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: false,
      src: ""
    };
  },
  computed: mapState("about", {
    // src: "data",
    loading: "loading",
  }),
  created() {
    // this.$store.dispatch("about/fetchAbout");
    this.loadGitHubPage()
  },
  methods: {
    async loadGitHubPage() {
      try {
        const response = await fetch("https://api.github.com/users/Keanuuuuuu"); // 用您的 GitHub 用户名替换 "yourusername"
        // const githubData = response.data;
        const githubURL = await response.json(); // 获取 GitHub 页面的 URL
        this.src = githubURL.repos_url; // 将 URL 分配给 src 属性以在 iframe 中加载
        console.log(githubURL);
        this.srcLoaded = true; // 标记为已加载
      } catch (error) {
        console.error("Error loading GitHub page:", error);
      }
    },
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>

<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <div v-for="item in data" :key="item.id" class="project-item">
      <a
        :href="
          item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
        "
        :target="item.url ? '_blank' : '_self'"
      >
        <img class="thumb" v-lazy="item.thumb" />
      </a>
      <div class="info">
        <h2>
          <a 
            :href="
              item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
            "
            :target="item.url ? '_blank' : '_self'"
          >
            {{ item.name }}
          </a>
        </h2>
        <a
          class="github"
          target="_blank"
          :href="item.github"
          v-if="item.github"
        >
          github
        </a>
        <p v-for="(desc, i) in item.description" :key="i">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import eventBus from "@/eventBus";
export default {
  computed: mapState("project", ["loading", "data"]),
  created() {
    this.$store.dispatch("project/fetchProject");
  },
  mounted(){
    // console.log(1111);
    this.$refs.projectContainer.addEventListener("scroll", this.handleScroll)
  },
  methods:{
    handleScroll(){
      // console.log(111);
      this.$bus.$emit("mainScroll", this.$refs.projectContainer)
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.project-container {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
  background-image: url("../../public/pexels-run-ffwpu-18457214 (1) (3).jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.project-item {
  padding: 20px;
  display: flex;
  margin: 10px;
  background-color:rgba(242, 240, 240, 0.863);
  border-radius: 8px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.05);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
}
</style>

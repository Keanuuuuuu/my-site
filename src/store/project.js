import { getProjects } from "@/api/project"

export default {
  namespaced: true,
  state: {
    loading: false,
    data: null
  },
  mutations:{
    setLoading(state, value){
      state.loading = value
    },
    setData(state, value){
      state.data = value
    }
  },
  actions:{
    async fetchProject(ctx){
      ctx.commit("setLoading", true);
      const resp = await getProjects();
      ctx.commit("setLoading", false);
      ctx.commit("setData", resp);
    }
  }
}
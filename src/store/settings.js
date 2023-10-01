import { getSettings } from "@/api/settings"

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
    async getData(ctx){
      ctx.commit("setLoading", true);
      const resp = await getSettings();
      ctx.commit("setLoading", false);
      ctx.commit("setData", resp);

      // 在这里就可以直接对网页图标进行处理
      if (resp.favicon) {
        // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
        let link = document.querySelector("link[ref='shortcut icon']");
        if (link) {
          link.href = resp.favicon;
          return;
        }
        link = document.createElement("link");
        link.rel = "shortcut icon";
        link.type = "images/x-icon";
        link.href = resp.favicon;
        console.log(resp.favicon);
        document.querySelector("head").appendChild(link);
      }
    }
  }
}
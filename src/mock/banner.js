import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
      title: "我热爱前端",
      description: "",
    },
    // {
    //   id: "2",
    //   midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
    //   bigImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
    //   title: "",
    //   description: "",
    // },
    // {
    //   id: "3",
    //   midImg: "",
    //   bigImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
    //   title: "",
    //   description: "",
    // },
  ],
});

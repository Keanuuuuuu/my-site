import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://avatars.githubusercontent.com/u/93373675?v=4",
    siteTitle: "Keanu'blog",
    github: "https://github.com/DuYi-Edu",
    qq: "2737000320",
    qqQrCode:
      "",
    weixin: "19555821918",
    weixinQrCode:
      "",
    mail: "shiboliu647@gmail.com",
    icp: "皖ICP备null号",
    githubName: "Keanuuuuuu",
    favicon: "https://www.bilibili.com/favicon.ico?v=1",
  },
});

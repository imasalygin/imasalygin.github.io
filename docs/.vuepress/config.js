module.exports = {
  title: "Илья Масалыгин",
  description: "Заметки о web-технологиях",
  base: "/",

  plugins: [
    "@vuepress/blog",
    ["@vuepress/google-analytics", { ga: "UA-133485844-1" }]
  ],

  themeConfig: {
    nav: [
      { text: "Блог", link: "/" },
      { text: "Github", link: "https://github.com/imasalygin" }
    ],
    sidebar: ["/"]
  }
};

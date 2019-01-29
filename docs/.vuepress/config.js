module.exports = {
  title: "Илья Масалыгин",
  description: "Заметки о web-технологиях",
  base: "/",

  plugins: ['@vuepress/blog'],

  themeConfig: {
    nav: [
      { text: "Блог", link: "/" },
      { text: "Github", link: "https://github.com/imasalygin" }
    ],
    sidebar: ["/"]
  }
};

const {defaultTheme} = require("vuepress");

module.exports = {
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', href: '/Users/fubaiping/CODE/VUE-S/forest_music-doc/docs/images/forest.png' }]],
    title: '森之乐音乐APP',
    description: '森之乐音乐APP--全栈开发文档',
    theme: defaultTheme({
        logo: '/images/forest.png',
        repo:"https://github.com/Seazer-x/forest-music-doc.git",
    })
}

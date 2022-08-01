const {defaultTheme} = require("vuepress")

module.exports = {
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', href: '/images/forest.png' }]],
    title: '森之乐音乐APP',
    description:"全平台音乐APP",
    theme: defaultTheme({
            sidebar: {
                '/guide/': [
                    {
                        text: 'Guide',
                        children: ['/guide/README.md', '/guide/getting-started.md'],
                    },
                ],
            },
        logo: '/images/forest.png',
        repo:"https://github.com/Seazer-x/forest-music-doc.git",
    }
    )
}

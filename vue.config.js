module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({ //这里是配置项，详见官方文档
                        rootValue: 16, // 换算的基数
                        // selectorBlackList: ['weui','mu'], // 忽略转换正则匹配项
                        propList: ['*'],
                    }),
                ]
            }
        },
    },
}
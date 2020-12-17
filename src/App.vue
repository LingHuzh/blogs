<template>
  <div id="app">
    <div id="nav"></div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,html,a,p,b,span,h1,h2,h3,ul,ol,li,em,div{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
body{
	background: #f6f8fa;
	// background: url(./images/bg.gif) no-repeat;
	// background-size: 100% 100%;
}
</style>

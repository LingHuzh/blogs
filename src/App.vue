<template>
	<div id="app">
		<div id="nav"></div>
		<NavAndFooter v-show="windowWidth < 800"></NavAndFooter>
		<router-view />
	</div>
</template>
<script>
	import "./js/jquery-1.7.2.min.js";
	import NavAndFooter from './components/mIndex/NavAndFooter.vue'
	export default {
		name: "",
		components: {
			NavAndFooter,
		},
		data() {
			return {
				windowWidth: window.innerWidth
			}
		},
		mounted() {
			let thisObj = this;
			window.onresize = function() {
				thisObj.windowWidth = window.innerWidth;
			}
		}
	}
</script>
<style lang="scss">
	@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");

	#app {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		// min-width: 1800px;
	}

	@media screen and(min-width:800px) {
		#app {
			min-width: 1800px;
		}
	}

	body,
	html,
	a,
	p,
	b,
	span,
	h1,
	h2,
	h3,
	ul,
	ol,
	li,
	em,
	div {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
		box-sizing: border-box;
	}

	body {
		background: #f6f8fa;
		width: 100%;
		height: 100%;
		overflow-x: auto
	}
</style>

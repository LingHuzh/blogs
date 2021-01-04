<template>
	<div class="home">
		<Nav />
		<!-- 主要区 -->
		<section class="li_home_main">
			<div class="li_home_main_left" :style="height">
				<div style="width: 100%;height: 80px;"></div>
				<Calendar />
				<p>个人部分CSDN博文</p>
				<ul>
					<li><a href="https://blog.csdn.net/LingHuzh/article/details/107906912" target="_blank" title="vue项目不被百度收录怎么办、seo优化问题">vue项目不被百度收录怎么办、seo优化问题</a></li>
					<li><a href="https://blog.csdn.net/LingHuzh/article/details/107858904" target="_blank" title="vue使用promise封装axios">vue使用promise封装axios</a></li>
					<li><a href="https://blog.csdn.net/LingHuzh/article/details/107709709" target="_blank" title="vue 动态给每个页面添加title、关键词和描述">vue
							动态给每个页面添加title、关键词和描述</a></li>
					<li><a href="https://blog.csdn.net/LingHuzh/article/details/111253026" target="_blank" title="微信小程序实时监测网络状态变化">微信小程序实时监测网络状态变化</a></li>
					<li><a href="https://blog.csdn.net/LingHuzh/article/details/111292384" target="_blank" title="微信小程序实现保存图片功能">微信小程序实现保存图片功能</a></li>
					<li><a href="https://blog.csdn.net/LingHuzh/article/details/109051873" target="_blank" title="vue使用swiper 不自动滚动、轮播，swiper.css 找不到，swiper等问题">vue使用swiper
							不自动滚动、轮播，swiper.css 找不到，swiper等问题</a></li>
				</ul>
				<div class="lh_home_gif">
					<img src="../images/xiaoxin.gif" alt="">
				</div>
				<div style="width: 100%;height: 30px;"></div>
			</div>

				<div class="li_home_main_right" :style="height">
				<div style="width: 100%;height: 80px;"></div>
				<div class="li_home_main_right_user">
					<h3>个人信息</h3>
					<div class="li_home_main_right_user_header">
						<span>姓名：令狐张豪</span>
						<span>工作经验：3年</span>
					</div>
					<div class="li_home_main_right_user_header">
						<span>邮箱：linghuzhanghao@163.com</span>
						<span>电话：173-1006-7051</span>
					</div>
					<div class="li_home_main_right_user_header">
						<span>学历：本科</span>
						<span></span>
					</div>
					<h3>求职意向</h3>
					<div class="li_home_main_right_user_header">
						<span>期望职位：web前端开发</span>
						<span>目标薪资：13k</span>
					</div>
					<div class="li_home_main_right_user_header">
						<span>工作性质：全职</span>
						<span></span>
					</div>
					<h3>专业技能</h3>
					<div class="li_home_main_right_user_skill">
						<p>熟练掌握 HTML CSS 基本布局以及 html5+css3 新属性，熟悉 W3C 标准</p>
						<p>熟练 JavaScript、jquery 以及 ES6 常用语法</p>
						<p>熟练 scss 、less预编译</p>
						<p>熟练响应式布局和弹性盒模型，擅长 HTML 的 移动端 开发</p>
						<p>熟练 ajax，axios 技术与后台处理数据</p>
						<p>熟练使用 jQuery 、bootstrap、element UI、Vant、Echarts 等框架</p>
						<p>熟练使用 Vue 全家桶（Vue-cli+Vue-store+vue-router+vuex+axios）</p>
						<p>熟练使用Vue的SSR服务端渲染Nuxt.js框架</p>
						<p>熟练使用微信小程序开发技术跟官方提供的WeUi框架进行小程序开发</p>
						<p>熟练使用 git、svn进行代码管理</p>
					</div>
				</div>
			</div>
		</section>
		<div style="width: 100%;height: 30px;"></div>
		<el-button type="primary" class="ai_download">
			<a href="">下载简历</a>
		</el-button>
		<Footer />
	</div>
</template>

<script>
	import Nav from '../components/index/Nav'
	import Calendar from '../components/index/Calendar'
	import Footer from '../components/index/Footer'
	export default {
		name: 'Home',
		components: {
			Nav,
			Calendar,
			Footer
		},
		data() {
			return {
				height: {
					height: window.innerHeight + 'px'
				},
				windowWidth: window.innerWidth
			}
		},
		mounted() {
			const that = this;
			window.onresize = function() {
				that.height = {
					height: window.innerHeight + 'px'
				}
				that.windowWidth = window.innerWidth
			}
			// this.$jsonp('http://www.linghuzh.cn:8081/home.json')
			// .then((res)=>{
			// 	console.log(res)
			// })
			// .catch((res)=>{
			// 	console.log(res)
			// })
		}
	}
</script>
<style lang="scss" scoped>
	// 下载简历按钮
	.ai_download{
		position: fixed;
		bottom: 8%;
		right: 2%;
	}
	.li_home_main {
		width: 100%;
		height: 100%;
		display: flex;
		overflow: auto;
	}

	.li_home_main_left {
		width: 20%;
		overflow: auto;
		background: #FFFFFF;
		border-right: 1px solid #DCDFE6;

		>p {
			width: 100%;
			padding-left: 6%;
			line-height: 50px;
			border-bottom: 1px solid #DCDFE6;
			border-top: 1px solid #DCDFE6;
			font-size: 18px;
			color: #606266;
		}

		ul {
			width: 100%;
			background: #EBEEF5;
			overflow: hidden;

			li {
				padding: 10px 6%;

				a {
					font-size: 16px;
					color: #555666;
				}
			}
		}
	}

	.li_home_main_left::-webkit-scrollbar,
	.li_home_main_right::-webkit-scrollbar {
		width: 5px;
	}

	.li_home_main_left::-webkit-scrollbar-thumb,
	.li_home_main_right::-webkit-scrollbar {
		background-color: #B8B8DC;
		border-radius: 10px;
		-webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1);
	}

	.li_home_main_left ul li a:hover {
		color: red;
	}

	.li_home_main_right {
		width: 100%;
		overflow: auto;
		// background: rgba(153,204,255,.3);
	}

	.lh_home_gif {
		img {
			display: block;
			width: 200px;
			height: 200px;
			margin: 10px auto 0;
		}
	}

	.li_home_main_right_user {
		width: 70%;
		border-radius: 5px;
		background: #FFFFFF;
		box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.08);
		margin: 30px auto;

		h3 {
			color: darkcyan;
			padding: 20px 30px;
		}
	}

	.hide_active {
		display: none;
	}

	.li_home_main_right_user_header {
		width: 100%;
		height: 50px;
		padding: 0px 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		span {
			width: 300px;
			color: #555555;
			font-size: 18px;
		}
	}
	.li_home_main_right_user_skill{
		width: 100%;
		padding: 0px 60px;
		p{
			color: #555555;
			font-size: 16px;
			line-height: 25px;
		}
	}
</style>

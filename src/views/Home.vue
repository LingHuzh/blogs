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
			</div>
			<div class="li_home_main_right">
				<div style="width: 100%;height: 80px;"></div>
				<div class="li_home_main_right_user">
					<h3>个人信息</h3>
				</div>
			</div>
		</section>
		<Footer/>
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
				}
			}
		},
		mounted() {
			const that = this;
			window.onresize = function() {
				that.height = {
					height: window.innerHeight + 'px'
				}
			}
		},

	}
</script>
<style lang="scss" scoped>
	.li_home_main {
		width: 100%;
		height: 100%;
		display: flex;
	}

	.li_home_main_left {
		width: 18%;
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

	.li_home_main_left ul li a:hover {
		color: red;
	}

	.li_home_main_right {
		width: 100%;
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
	.li_home_main_right_user{
		width: 80%;
		height: 200px;
		border-radius: 5px;
		background: #FFFFFF;
		box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.08);
		margin: 30px auto;
		h3{
			color: darkcyan;
			padding: 20px 30px;
		}
	}
</style>

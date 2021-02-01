<template>
	<div class="m-nav-and-footer">
		<nav class="m-nav">
			<ul>
				<li><img src="../../images/heard.jpg" alt=""></li>
				<li class="flex" @click="showPopup">
					<van-icon name="bars" />
					<span>菜单</span>
				</li>
			</ul>
		</nav>
		<footer class="m-footer">
			<ul>
				<li><a href="tel:17310067051" class="flex">联系方式</a></li>
				<li><a href="http://www.linghuzh.cn:8087/简历_b.docx" class="flex">下载简历</a></li>
			</ul>
		</footer>
		<van-popup v-model="show" position="left" :style="[{height: '100%' },{width: '200px'},{background: '#313640'}]">
			<ul>
				<li>
					<span>LingHuZhangHao</span>
				</li>
				<li>
					<a href="/">个人简历</a>
				</li>
				<li>
					<a href="/production">个人作品</a>
				</li>
				<li>
					<a href="https://blog.csdn.net/LingHuzh?spm=1000.2115.3001.5343">个人博客</a>
				</li>
				<li>
					<a href="/relation">联系作者</a>
				</li>
			</ul>
		</van-popup>
	</div>
</template>

<script>
	export default {
		name: 'NavAndFooter',
		components: {

		},
		data() {
			return {
				show: false,
			}
		},
		methods: {
			showPopup() {
				this.show = true;
			},
		}
	}
</script>

<style lang="scss">
	$colorSize: 16px;
	$writeColor: #fff;

	.flex {
		display: flex;
		align-items: center;
	}

	// 导航
	.m-nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 10px 18px;
		box-sizing: border-box;
		z-index: 3;
		overflow: hidden;
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, .12);
		background: #B8B8DC;
		color: $writeColor;

		ul {
			display: flex;
			align-items: center;
			justify-content: space-between;

			li {
				font-size: $colorSize;

				img {
					display: block;
					width: 45px;
					height: 45px;
					border-radius: 50%;
				}

				i {
					padding-right: 3px;
				}
			}
		}
	}

	// 底部
	.m-footer {
		position: fixed;
		width: 100%;
		min-width: 300.48px;
		padding: 10px 30px;
		box-sizing: border-box;
		overflow: hidden;
		background: #fff;
		bottom: 0;
		left: 0;
		z-index: 3;
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, .12);

		ul {
			display: flex;
			justify-content: space-between;

			a {
				display: block;
				width: 110px;
				background: deepskyblue;
				text-align: center;
				height: 40px;
				line-height: 40px;
				font-size: 15px;
				color: $writeColor;
				border-radius: 3px;
			}
		}
	}
	// 弹出层
	.van-overlay{
		    background-color: rgba(0,0,0,.0) !important;
	}
	.van-popup{
		ul{
			li{
				color: $writeColor;
				text-align: center;
				padding: 20px 0;
				border-bottom: 2px solid #fff;
				a{
					color: #fff !important;
				}
			}
		}
	}
</style>

<template>
	<div class="lh_nav">
		<div class="lh_nav_left">
			<img src="../../images/heard.jpg" alt="头像" />
			<p>{{ name }}</p>
		</div>
		<div class="lh_nav_right">
			<router-link to="/" lang="span">个人简历</router-link>
			<router-link to="/blogs" lang="span">个人博客</router-link>
			<router-link to="/production" lang="span">个人作品</router-link>
			<a href="javascript:;" @click="open">我的相册</a>
			<router-link to="/" lang="span">我的资源</router-link>
		</div>
		<el-button type="primary" icon="el-icon-full-screen" @click="launchFullscreen()">全屏</el-button>
	</div>
</template>

<script>
	export default {
		name: "",
		components: {},
		data() {
			return {
				name: "LingHuZhangHao",
				photoPwd: 5494,
				windowWidth: window.innerWidth
			};
		},
		methods: {
			// 访问我的相册权限
			open() {
				this.$prompt("请输入访问密码", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
					})
					.then(({
						value
					}) => { //点击确定
						if (value == this.photoPwd) {
							const photo = this.$router.resolve({
								path: '/'
							});
							window.location.href = photo.href;
						} else {
							this.$message.error('您输入的密码不正确');
						}
					})
					.catch(() => { //点击取消

					});
			},
			//切换为全屏展示
			launchFullscreen() {
				var element = document.documentElement;
				if (element.requestFullscreen) {
					element.requestFullscreen();
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if (element.webkitRequestFullscreen) {
					element.webkitRequestFullscreen();
				} else if (element.msRequestFullscreen) {
					element.msRequestFullscreen();
				}
			}
		},
	};
</script>

<style lang="scss" scoped>
	.lh_nav {
		width: 100%;
		height: 80px;
		background: #B8B8DC;
		color: #ffffff;
		font-size: 28px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		top: 0;
		z-index: 99;
	}

	.lh_nav_left {
		width: 30%;
		height: 100%;
		display: flex;
		align-items: center;

		img {
			display: block;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			margin: 0 50px 0 10%;
		}
	}

	.lh_nav_right {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		a {
			color: #ffffff;
			font-size: 18px;
			display: block;
			width: 103px;
			height: 35px;
			line-height: 35px;
			text-align: center;
			// border: 1px solid darkgray;
			border-radius: 10px;
		}
	}

	.el-button--primary {
		margin-right: 3%;
	}

	.width_active {
		width: 100%;
	}
	@media screen and(max-width:1080px){
		.lh_nav_left{
			display: none;
		}
		.lh_nav_right{
			width: 100%;
		}
	}
</style>

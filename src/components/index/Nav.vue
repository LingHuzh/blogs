<template>
	<div class="lh_nav">
		<div class="lh_nav_left">
			<img src="../../images/heard.jpg" alt="头像" />
			<p>{{ name }}</p>
		</div>
		<div class="lh_nav_right">
			<router-link to="/" lang="span">个人简历</router-link>
			<router-link to="/blogs" lang="span">个人博客</router-link>
			<router-link to="/" lang="span">个人作品</router-link>
			<a href="javascript:;" @click="open">我的相册</a>
			<router-link to="/" lang="span">我的资源</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		components: {},
		data() {
			return {
				name: "LingHuZhangHao",
				photoPwd: 5494
			};
		},
		methods: {
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
		},
	};
</script>

<style lang="scss" scoped>
	.lh_nav {
		width: 100%;
		height: 80px;
		background: #24292e;
		color: #ffffff;
		font-size: 28px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
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
		margin-right: 10%;
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
</style>

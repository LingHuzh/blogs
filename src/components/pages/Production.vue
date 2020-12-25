<template>
    <div class="lh_production">
		<Nav/>
		<section class="lh_production_main">
			<div class="lh_production_main_btn_box">
				<el-button type="primary">全部作品</el-button>
				<el-button type="success">PC端</el-button>
				<el-button type="info">移动端app</el-button>
				<el-button type="warning">微信小程序</el-button>
				<el-button type="danger">响应式</el-button>
			</div>
			<div class="lh_production_box">
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</section>
    </div>
</template>

<script>
    import Nav from '../index/Nav.vue'
    export default {
        name: 'Production',
        components:{
        	Nav
        }
    }
</script>

<style lang="scss" scoped>
.lh_production{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 80px;
	background: url(../../images/bg.jpg) no-repeat;
	background-position: center;
	background-size: cover;
}
.lh_production_main{
	width: 100%;
	height: 100%;
	position: fixed;
	background: rgba(255,255,255,.5);
	z-index: 1;
}
.lh_production_main_btn_box{
	width: 1000px;
	margin: 50px auto 20px;
	display: flex;
	justify-content: space-between;
	button{
		width: 120px;
	}
}
.lh_production_box{
	width: 1200px;
	margin: 20px auto 0;
	ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		li{
			width: 30.33%;
			height: 300px;
			border: 1px solid;
			margin-top: 30px;
		}
	}
}
</style>
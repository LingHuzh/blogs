<template>
	<div class="lh_production">
		<Nav v-show="windowWidth > 800"></Nav>
		<section class="lh_production_main" v-show="windowWidth > 800">
			<div class="lh_production_main_btn_box">
				<el-button type="primary" @click="allAdd()">全部作品</el-button>
				<el-button type="success" @click="pcAdd()">PC端</el-button>
				<el-button type="info" @click="phoneAdd()">移动端app/h5</el-button>
				<el-button type="warning" @click="weChat()">微信小程序</el-button>
				<el-button type="danger" @click="adapt()">响应式</el-button>
			</div>
			<div class="lh_production_box">
				<ul>
					<li v-show="enqi">
						<div>
							<img src="../../images/enqi.png" alt="">
						</div>
						<p>介绍：恩启教育官方网站，更加明确对外展示了恩启的优势、教学团队、教学方法和恩启的最新动态。</p>
						<el-button type="primary" round @click="enqiUrl()">查 看</el-button>
					</li>
					<li v-show="ai">
						<div>
							<img src="../../images/ai.jpg" alt="" style="width: 170px;">
						</div>
						<p>介绍：“儿童行为AI筛查服务版”小程序使用人工智能技术，对于有孤独症谱系障碍风险儿童进行早期的风险筛查。</p>
						<el-button type="primary" round @click="lookAi()">查 看</el-button>
					</li>
					<li v-show="backstage">
						<div>
							<img src="../../images/guanli.png" alt="" style="width: 130px;">
						</div>
						<p>介绍：恩启教育专用后台管理系统，内部包含各个项目的后台管理、人员分配、权限分配、接口文档等。</p>
						<el-button type="primary" round @click="backstageUrl()">查 看</el-button>
					</li>
					<li v-show="benefit">
						<div>
							<img src="../../images/gongyi.jpg" alt="" style="width: 100px;">
						</div>
						<p>介绍：恩启教育99公益项目,在公益项目“光照星未来”下共同发起2个公益项目，助理自闭症孩子接受科学专业的康复训练。</p>
						<el-button type="primary" round @click="benefitUrl()">查 看</el-button>
					</li>
					<li v-show="guLu">
						<div>
							<img src="../../images/zhanwei.png" alt="">
						</div>
						<p>介绍：轮胎经销商 APP，解决轮胎下单、付款、发货跟踪、物流跟踪等一整套完整的线上销售体系。</p>
						<el-button type="primary" round @click="guLuUrl()">查 看</el-button>
					</li>
					<li v-show="xiaoGu">
						<div>
							<img src="../../images/zhanwei.png" alt="">
						</div>
						<p>介绍：手机上的后台端，通过登录后区分不同角色实现不同功能，如：改价、审核订单、审核还款、发货，出库、数据统计等。</p>
						<el-button type="primary" round @click="xiaoGuUrl()">查 看</el-button>
					</li>
					<li v-show="blogs">
						<div>
							<img src="../../images/blogs.png" alt="">
						</div>
						<p>介绍：作者个人博客网站，用于记录并分享自己在实际项目中遇到的问题跟解决方案和放置自己的个人简历跟作品用。</p>
						<el-button type="primary" round @click="blogsUrl()">查 看</el-button>
					</li>
				</ul>
			</div>
			

		</section>
		<section class="m-production_main" v-show="windowWidth < 800">
			<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px', fontSize: '16px',marginTop:'90px' }">
				我的作品
			</van-divider>
			<div class="m-production-box">
				<ul>
					<li>
						<div>
							<img src="../../images/enqi.png" alt="">
						</div>
						<p>介绍：恩启教育官方网站，更加明确对外展示了恩启的优势、教学团队、教学方法和恩启的最新动态。</p>
						<el-button type="primary" round @click="enqiUrl()">查 看</el-button>
					</li>
					<li>
						<div>
							<img src="../../images/ai.jpg" alt="" style="width: 170px;">
						</div>
						<p>介绍：“儿童行为AI筛查服务版”小程序使用人工智能技术，对于有孤独症谱系障碍风险儿童进行早期的风险筛查。</p>
						<el-button type="primary" round @click="mLookAi()">查 看</el-button>
					</li>
					<li>
						<div>
							<img src="../../images/guanli.png" alt="" style="width: 130px;">
						</div>
						<p>介绍：恩启教育专用后台管理系统，内部包含各个项目的后台管理、人员分配、权限分配、接口文档等。</p>
						<el-button type="primary" round @click="mBackstageUrl()">查 看</el-button>
					</li>
					<li>
						<div>
							<img src="../../images/gongyi.jpg" alt="" style="width: 100px;">
						</div>
						<p>介绍：恩启教育99公益项目,在公益项目“光照星未来”下共同发起2个公益项目，助理自闭症孩子接受科学专业的康复训练。</p>
						<el-button type="primary" round @click="benefitUrl()">查 看</el-button>
					</li>
					<li>
						<div>
							<img src="../../images/zhanwei.png" alt="">
						</div>
						<p>介绍：轮胎经销商 APP，解决轮胎下单、付款、发货跟踪、物流跟踪等一整套完整的线上销售体系。</p>
						<el-button type="primary" round @click="mGuLuUrl()">查 看</el-button>
					</li>
					<li>
						<div>
							<img src="../../images/zhanwei.png" alt="">
						</div>
						<p>介绍：手机上的后台端，通过登录后区分不同角色实现不同功能，如：改价、审核订单、审核还款、发货，出库、数据统计等。</p>
						<el-button type="primary" round @click="mXiaoGuUrl()">查 看</el-button>
					</li>
					<li>
						<div>
							<img src="../../images/blogs.png" alt="">
						</div>
						<p>介绍：作者个人博客网站，用于记录并分享自己在实际项目中遇到的问题跟解决方案和放置自己的个人简历跟作品用。</p>
						<el-button type="primary" round @click="blogsUrl()">查 看</el-button>
					</li>
				</ul>
			</div>
			<div style="width: 100%;height: 60px;"></div>
		</section>
	</div>
</template>

<script>
	import Nav from '../index/Nav.vue'
	import { Toast } from 'vant';
	export default {
		name: 'Production',
		components: {
			Nav
		},
		data() {
			return {
				photoPwd: 5494, //恩启后台访问密码
				enqi: true,
				ai: true,
				backstage: true,
				benefit: true,
				guLu: true,
				xiaoGu: true,
				blogs: true,
				windowWidth:window.innerWidth
			}
		},
		methods: {
			//全部作品按钮
			allAdd() {
				this.enqi = true;
				this.ai = true;
				this.backstage = true;
				this.benefit = true;
				this.guLu = true;
				this.xiaoGu = true;
				this.blogs = true;
			},
			// pc按钮
			pcAdd() {
				this.enqi = true;
				this.ai = false;
				this.backstage = true;
				this.benefit = false;
				this.guLu = false;
				this.xiaoGu = false;
				this.blogs = true;
			},
			//移动端app/h5
			phoneAdd() {
				this.enqi = true;
				this.ai = false;
				this.backstage = false;
				this.benefit = true;
				this.guLu = true;
				this.xiaoGu = true;
				this.blogs = false;
			},
			// 小程序
			weChat() {
				this.enqi = false;
				this.ai = true;
				this.backstage = false;
				this.benefit = false;
				this.guLu = false;
				this.xiaoGu = false;
				this.blogs = false;
			},
			// 响应式
			adapt() {
				this.enqi = true;
				this.ai = false;
				this.backstage = false;
				this.benefit = false;
				this.guLu = false;
				this.xiaoGu = false;
				this.blogs = false;
			},
			//恩启官网查看按钮
			enqiUrl() {
				window.open('https://www.ingcare.com/');
			},
			//恩启后台查看按钮
			backstageUrl() {
				this.$prompt("请询问作者访问密码后进入", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
					})
					.then(({
						value
					}) => { //点击确定
						if (value == this.photoPwd) {
							window.open('http://123.57.221.104:13800/#/login');
						} else {
							this.$message.error('您输入的密码不正确');
						}
					})
					.catch(() => { //点击取消

					});
			},
			//ai筛查小程序查看按钮
			lookAi(){
				this.$message('请使用微信扫码进入');
			},
			// 99公益查看按钮  
			benefitUrl(){
				window.open('http://enqi.ingcare.com/');
			},
			// 轱辘轱辘查看按钮  
			guLuUrl(){
				this.$message('请在手机应用商店搜索【轱辘轱辘】下载查看');
			},
			// 小轱查看按钮
			xiaoGuUrl(){
				this.$message('请在手机应用商店搜索【小轱】下载查看');
			},
			// 作者博客查看按钮
			blogsUrl(){
				window.open('http://www.linghuzh.cn/');
			},
			mLookAi(){
				Toast({
					message:'请保存图片到本地进入微信识别，或搜索微信小程序名字',
					duration: 3000
					
				});
			},
			mBackstageUrl(){
				Toast({
					message:'请使用PC端查看',
					duration: 2000
				});
			},
			mGuLuUrl(){
				Toast({
					message:'请在应用商店下载查看',
					duration: 2000
				});
			},
			mXiaoGuUrl(){
				Toast({
					message:'请在应用商店下载查看',
					duration: 2000
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@media screen and(min-width:800px){
		.lh_production {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 80px;
			background: url(../../images/bg.jpg) no-repeat;
			background-position: center;
			background-size: 100% 100%;
			overflow-x: auto;
		}
	}

	.lh_production_main {
		width: 100%;
		height: 100%;
		position: absolute;
		background: rgba(255, 255, 255, .5);
		z-index: 1;
	}

	.lh_production_main_btn_box {
		width: 1000px;
		margin: 50px auto 20px;
		display: flex;
		justify-content: space-between;

		button {
			width: 120px;
		}
	}

	.lh_production_box {
		width: 1200px;
		height: 680px;
		margin: 20px auto 0;
		overflow-y: auto;
		padding: 0 10px;
		ul {
			width: 99%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			li {
				width: 30.33%;
				height: 300px;
				margin-top: 30px;
				background: rgba(255, 255, 255, .5);
				box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.08);
				border-radius: 6px;
				transition: all 0.3s;
				cursor: pointer;
				position: relative;

				div {
					width: 300px;
					height: 160px;
					margin: 10px auto;
					background: #FFFFFF;
					border-radius: 5px;

					img {
						display: block;
						width: 100%;
						height: 100%;
						border-radius: 5px;
						margin: 0 auto;
					}
				}

				p {
					font-size: 14px;
					color: #555555;
					padding: 5px 30px;
				}

				button {
					width: 200px;
					position: absolute;
					left: 50%;
					margin-left: -100px;
				}
			}
		}
	}

	.lh_production_box ul li:hover {
		transform: scale(1.06); //鼠标经过的时候改变
		box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.08);
		background: rgba(255, 255, 255, .8);
	}

	.lh_production_box::-webkit-scrollbar {
		width: 5px;
	}

	.lh_production_box::-webkit-scrollbar-thumb {
		background-color: #d3a4ff;
		border-radius: 10px;
		-webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1);
	}
	// 移动端
	@media screen and (max-width:800px){
		.m-production-box{
			width: 100%;
			ul{
				width: 90%;
				margin:0 auto ;
				li{
					width: 100%;
					margin: 0 auto 30px;
					background: rgba(0,191,255,.3);
					border-radius: 6px;
					padding: 15px;
					box-shadow: 0 0.1875rem 0.4375rem 0.0625rem rgba(0, 0, 0, 0.08);
					img{
						display: block;
						width: 100%;
						height: 100%;
						border-radius: 0.3125rem;
						margin: 0 auto;
					}
					p{
						font-size: 14px;
						color: #555555;
						padding: 0.625rem 1.875rem;
					}
					button{
						width: 200px;
						height: 50px;
						border-radius: 6px;
						margin: 10px auto;
						display: block;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="relation">
		<Nav v-show="windowWidth > 800"></Nav>
		<!-- 我的联系方式 -->
		<section class="relation-main" v-show="windowWidth > 800">
			<ul>
				<li>
					<img src="../../images/wxHeader.jpg" alt="">
					<p>Call me lǎo sǎi</p>
					<img src="../../images/wx.jpg" alt="" class="code-image">
					<span>扫一扫添加我的微信</span>
				</li>
				<li>
					<img src="../../images/qqHeader.jpg" alt="">
					<p>一期一会</p>
					<img src="../../images/QQ.png" alt="" class="code-image">
					<span>扫一扫添加我的QQ</span>
				</li>
			</ul>
		</section>
		<!-- 发邮件给作者 -->
		<section class="relation-email" v-show="windowWidth > 800">
			<h1>给作者发送邮件</h1>
			<form id="content">
				<div>
					<span>发件人：</span>
					<input type="text" name="发件人" v-model="name" placeholder="输入你的姓名" />
				</div>
				<div>
					<span>您的邮箱：</span>
					<input type="email" name="发件人邮箱" v-model="mail" placeholder="输入你的邮箱" />
				</div>
				<div>
					<span>邮件内容</span>
					<textarea name="" id="" cols="30" rows="10" name="内容" v-model="text"></textarea>
				</div>
				<el-button type="primary" id="btn" @click="onSubmit">发送</el-button>
			</form>
		</section>
		<section class="m-relation-main" v-show="windowWidth < 800">
			<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px', fontSize: '16px',marginTop:'90px' }">
				联系作者
			</van-divider>
			<ul>
				<li>
					<img src="../../images/wxHeader.jpg" alt="">
					<p>Call me lǎo sǎi</p>
					<img src="../../images/wx.jpg" alt="" class="code-image">
					<span>扫一扫添加我的微信</span>
					<span>长按保存二维码</span>
				</li>
				<li>
					<img src="../../images/qqHeader.jpg" alt="">
					<p>一期一会</p>
					<img src="../../images/QQ.png" alt="" class="code-image">
					<span>扫一扫添加我的QQ</span>
					<span>长按保存二维码</span>
				</li>
			</ul>
			<h1>给作者发送邮件</h1>
			<form id="content" class="m-form-box">
				<van-cell-group>
				  <van-field v-model="name" name="发件人" label="发件人" placeholder="输入你的姓名" />
				</van-cell-group>
				<van-cell-group>
				  <van-field v-model="mail" name="发件人邮箱" label="您的邮箱" placeholder="输入你的邮箱" />
				</van-cell-group>
				<van-field
				  v-model="text"
				  rows="2"
				  autosize
				  label="邮件内容"
				  type="textarea"
				  maxlength="500"
				  placeholder="请输入邮件内容"
				  show-word-limit
				  name="内容"
				/>
				<div class="m-sub-box">
				   <el-button type="primary" id="btn" @click="onSubmit">发送</el-button>
				</div>
			</form>
			<div style="width: 100%;height: 80px;"></div>
		</section>
	</div>
</template>

<script>
	import { Field } from 'vant';
	import '../../js/jquery-3.2.1.min.js'
	import Nav from '../index/Nav.vue';
	export default {
		name: 'Relation',
		components: {
			Nav
		},
		data() {
			return {
				form: {
					name: '',
					_replyto: '',
					desc: ''
				},
				name: '',
				mail: '',
				text: '',
				windowWidth:window.innerWidth
			}
		},
		methods: {
			onSubmit() {
				console.log(this.name, this.mail, this.text)
				if (this.name == '') {
					this.$notify.error({
						title: '错误',
						message: '请输发件人'
					});
				} else if (this.mail == '') {
					this.$notify.error({
						title: '错误',
						message: '请输入您的邮箱'
					});
				} else if (this.text == '') {
					this.$notify.error({
						title: '错误',
						message: '请输入邮件内容'
					});
				}
				if (this.name != '' && this.mail != '' && this.text != '') {
					var obj = $("#content").serialize(); //获取id为content的form表单里面的内容,name值均为formspree提供不能更改
					$.ajax({
						type: "post", //必须post请求
						url: "https://formspree.io/f/xwkwawwg", //abc@qq.com换成你要接收的邮箱地址
						async: true,
						data: obj,
						dataType: "json",
						success: res => {
							this.$notify({
								title: '成功',
								message: '发送成功',
								type: 'success'
							});
							this.name = '';
							this.mail = '';
							this.text = '';
						},
						error: res => {
							this.$notify.error({
								title: '错误',
								message: '发送失败'
							});
						}
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	$BgColor:#FFFFFF;

	@media screen and (min-width:800px){
		.relation {
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

	.relation::-webkit-scrollbar {
		width: 5px;
	}

	.relation::-webkit-scrollbar-thumb {
		background-color: #d3a4ff;
		border-radius: 10px;
		-webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1);
	}

	.relation-main {
		width: 100%;
		overflow: hidden;

		ul {
			width: 45%;
			margin: 100px auto 0;
			display: flex;
			justify-content: space-between;

			li {
				width: 360px;
				background: rgba(64, 158, 255, .5);
				// background: #D9ECFF;
				border-radius: 10px 10px 5px 5px;
				box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.08);
				transition: all 0.3s;
				color: $BgColor;
				position: relative;
				text-align: center;

				img {
					display: block;
				}

				p {
					font-size: 24px;
					margin: 60px 0 15px 0;
				}

				span {
					display: block;
					font-size: 16px;
					padding-bottom: 15px;
				}
			}
		}
	}

	// 鼠标经过的时候改变二维码的样式
	.relation-main ul li:hover {
		transform: scale(1.06);
		box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.08);
		background: rgba(64, 158, 255, .85);
	}

	// 鼠标经过的时候改变头像的样式
	.relation-main ul li img:first-child:hover {
		border: 5px solid rgba(64, 158, 255, .85);
	}

	// 头像样式
	.relation-main ul li img:first-child {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: 5px solid rgba(64, 158, 255, .5);
		position: absolute;
		left: 50%;
		margin-left: -40px;
		top: -40px;
	}

	// 二维码样式
	.code-image {
		width: 200px;
		height: 200px;
		margin: 0 auto 15px;
	}

	// 邮件部分

	input,
	textarea {
		outline: none;
		border: none;
		/**修改颜色*/
		outline-color: "red";
	}

	input:-moz-placeholder,
	textarea:-moz-placeholder {
		color: $BgColor;
	}

	input:-ms-input-placeholder,
	textarea:-ms-input-placeholder {
		color: $BgColor;
	}

	input::-webkit-input-placeholder,
	textarea::-webkit-input-placeholder {
		color: $BgColor;
	}

	.relation-email {
		width: 810px;
		background: rgba(64, 158, 255, .5);
		// background: $BgColor;
		margin: 60px auto;
		padding: 20px;
		text-align: center;
		color: $BgColor;

		h1 {
			padding-bottom: 20px;
		}

		button {
			width: 210px;
			height: 50px;
			border: none;
			border-radius: 5px;
			margin: 50px 0 0 1%;
		}

		div {
			width: 500px;
			margin: 0 auto;
			display: flex;
			margin-top: 15px;

			span {
				display: block;
				width: 100px;
				text-align: left;
			}

			input {
				display: block;
				margin: 0 auto;
				width: 300px;
				height: 35px;
				border: 2px solid #fff;
				border-radius: 5px;
				background: none;
				color: $BgColor;
				font-weight: bold;
				padding-left: 8px;
			}

			textarea {
				width: 300px;
				border: 2px solid #fff;
				border-radius: 5px;
				background: none;
				margin-left: 9%;
			}

		}
	}

	.el-form-item__label {
		color: #fff !important;
	}

	.el-textarea__inner {
		min-height: 200px !important;
	}
	// 移动端
	@media screen and(max-width:800px){
		.m-relation-main{
			h1{
				text-align: center;
				display: block;
				margin: 30px 0;
				color: red;
			}
			ul {
				width: 80%;
				margin: 60px auto 0;
			
				li {
					width: 100%;
					background: rgba(64, 158, 255, .5);
					border-radius: 10px 10px 5px 5px;
					box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.08);
					transition: all 0.3s;
					color: $BgColor;
					position: relative;
					text-align: center;
					img {
						display: block;
					}
					p {
						font-size: 18px;
						margin: 60px 0 15px 0;
						padding-top: 60px;
					}
					span {
						display: block;
						font-size: 14px;
						padding-bottom: 10px;
					}
				}
			}
		}
		.m-relation-main ul li img:first-child{
			    width: 4.5rem;
			    height: 4.5rem;
			    border-radius: 50%;
			    border: 0.3125rem solid rgba(64, 158, 255, 0.5);
			    position: absolute;
			    left: 50%;
			    margin-left: -2.5rem;
			    top: -2.5rem;
		}
		.m-sub-box{
			margin-top: 15px;
			button{
				width: 90%;
				margin: 0 auto;
				position: relative;
				left: 50%;
				margin-left: -45%;
				border-radius: 30px !important;
			}
		}
		.van-cell{
			background-color: rgba(64, 158, 255, 0.5);
		}
		.van-field__body input::-webkit-input-placeholder,
		.van-field__body textarea::-webkit-input-placeholder
		{
			color: #fff;
		}
		.van-field__body input::-moz-placeholder,
		.van-field__body textarea::-moz-placeholder
		{
			color: #fff;
		}
		.van-field__body input::-moz-placeholder,
		.van-field__body textarea::-moz-placeholder
		{
			color: #fff;
		}
		.van-field__body input::-ms-input-placeholder,
		.van-field__body textarea::-ms-input-placeholder
		{
			color: #fff;
		}
		.van-cell__title span{
			color: #fff;
		}
		.m-form-box{
			// background: rgba(64, 158, 255, 0.5);
			padding: 10px 0;
		}
	}
</style>

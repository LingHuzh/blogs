<template>
	<div class="home">
		<Nav v-show="windowWidth > 800"></nav>
		<!-- 主要区 -->
		<section class="li_home_main" v-show="windowWidth > 800">
			<div class="li_home_main_left">
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

			<div class="li_home_main_right">
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
						<p>熟练使用 jQuery 、bootstrap、swiper、element UI、Vant、Echarts 等框架</p>
						<p>熟练使用 Vue 全家桶（Vue-cli+Vue-store+vue-router+vuex+axios）</p>
						<p>熟练使用Vue的SSR服务端渲染Nuxt.js框架</p>
						<p>熟练使用微信小程序开发技术跟官方提供的WeUi框架进行小程序开发</p>
						<p>熟练使用 git、svn进行代码管理</p>
					</div>
					<h3>个人介绍</h3>
					<div class="lh_my_introduce">{{sketch}}</div>
					<h3>教育经历</h3>
					<div class="li_home_main_right_user_header">
						<span>学校：山西工商学院</span>
					</div>
					<div class="li_home_main_right_user_header">
						<span>时间：2015.09-2019.06</span>
						<span>专业：计算机科学与技术</span>
					</div>
					<h3>工作经历</h3>
					<div class="li_home_main_right_user_header">
						<span class="width">公司：轱辘轱辘（北京）科技有限公司</span>
					</div>
					<div class="li_home_main_right_user_header">
						<span>时间：2019.06-2020.04</span>
						<span>职位：web开发工程师</span>
					</div>
					<div class="li_home_main_right_user_header">
						<span class="width">公司：北京正在关怀科技有限公司（北京恩启教育科技有限公司）</span>
					</div>
					<div class="li_home_main_right_user_header">
						<span>时间：2020.05-至今</span>
						<span>职位：web前端开发工程师</span>
					</div>
					<h3>项目经验</h3>
					<div class="lh_home_project_box">
						<div class="lh_home_project_title">儿童行为AI筛查服务版（微信小程序）</div>
						<div class="lh_home_project_describe">
							<span>项目描述：</span>
							<em>教师、医生审核视频端</em>
						</div>
						<div class="lh_home_project_describe">
							<span>工作描述：</span>
							<em>使用微信小程序原生开发</em>
						</div>
						<div class="lh_home_duty_describe">责任描述：</div>
						<div class="lh_home_duty_p">
							<ul>
								<li v-for="item in childBehavior">
									<span>{{item.num}}</span>
									<em>{{item.text}}</em>
								</li>
							</ul>
						</div>
					</div>

					<div class="lh_home_project_box">
						<div class="lh_home_project_title">恩启官网（www.ingcare.com）</div>
						<div class="lh_home_project_describe">
							<span>项目描述：</span>
							<em>此官网为恩启教育新版官网网站，更加明确对外展示了恩启的优势、教学团队、教学方法和恩启的最新动态</em>
						</div>
						<div class="lh_home_project_describe">
							<span>工作描述：</span>
							<em>使用vue 3x脚手架搭建项目，长期维护迭代更新</em>
						</div>
						<div class="lh_home_duty_describe">责任描述：</div>
						<div class="lh_home_duty_p">
							<ul>
								<li v-for="item in enqiWebSite">
									<span>{{item.num}}</span>
									<em>{{item.text}}</em>
								</li>
							</ul>
						</div>
					</div>

					<div class="lh_home_project_box">
						<div class="lh_home_project_title">轱辘轱辘可视化后台</div>
						<div class="lh_home_project_describe">
							<span>项目描述：</span>
							<em>一款展示给大B端的实时销售数据查看平台</em>
						</div>
						<div class="lh_home_project_describe">
							<span>工作描述：</span>
							<em>使用vue2.0版本，vue-cli 3.0脚手架、Element UI、Echarts</em>
						</div>
						<div class="lh_home_duty_describe">责任描述：</div>
						<div class="lh_home_duty_p">
							<ul>
								<li v-for="item in visualization">
									<span>{{item.num}}</span>
									<em>{{item.text}}</em>
								</li>
							</ul>
						</div>
					</div>

					<div class="lh_home_project_box">
						<div class="lh_home_project_title">轱辘轱辘后台管理系统</div>
						<div class="lh_home_project_describe">
							<span>项目描述：</span>
							<em>实时查看订单销售、数据统计、查看物流发货出库状态，内容管理、商品管理、订单管理、商铺管理，经销商、促销、进销存、账户管理。</em>
						</div>
						<div class="lh_home_project_describe">
							<span>工作描述：</span>
							<em>使用 jqueryUi、jquery、EasyUI、echarts 开发</em>
						</div>
						<div class="lh_home_duty_describe">责任描述：</div>
						<div class="lh_home_duty_p">
							<ul>
								<li v-for="item in glBackstage">
									<span>{{item.num}}</span>
									<em>{{item.text}}</em>
								</li>
							</ul>
						</div>
					</div>

					<div class="lh_home_project_box">
						<div class="lh_home_project_title">轱辘轱辘（app）（手机应用商店可下载）</div>
						<div class="lh_home_project_describe">
							<span>项目描述：</span>
							<em>轮胎经销商 APP，解决轮胎下单、付款、发货跟踪、物流跟踪等一整套完整的线上销售体系</em>
						</div>
						<div class="lh_home_project_describe">
							<span>工作描述：</span>
							<em>使用 jquery mobile 模板、mescroll、jquery 开发</em>
						</div>
						<div class="lh_home_duty_describe">责任描述：</div>
						<div class="lh_home_duty_p">
							<ul>
								<li v-for="item in gulugulu">
									<span>{{item.num}}</span>
									<em>{{item.text}}</em>
								</li>
							</ul>
						</div>
					</div>

					<div class="lh_home_project_box">
						<div class="lh_home_project_title">小轱（app）（手机应用商店可下载）</div>
						<div class="lh_home_project_describe">
							<span>项目描述：</span>
							<em>手机上的后台端，通过登录后区分不同角色实现不同功能，如：改价、审核订单、审核还款、发货，出库、数据统计等</em>
						</div>
						<div class="lh_home_project_describe">
							<span>工作描述：</span>
							<em>使用 jquery mobile 模板、mescroll、jquery、echarts 开发</em>
						</div>
						<div class="lh_home_duty_describe">责任描述：</div>
						<div class="lh_home_duty_p">
							<ul>
								<li v-for="item in xiaogu">
									<span>{{item.num}}</span>
									<em>{{item.text}}</em>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</section>
		<div style="width: 100%;height: 30px;" v-show="windowWidth > 800"></div>
		<el-button type="primary" class="ai_download" v-show="windowWidth > 800">
			<a href="http://www.linghuzh.cn:8087/简历_b.docx">下载简历</a>
		</el-button>
		<Footer v-show="windowWidth > 800"></Footer>
		<section class="m-home" v-show="windowWidth < 800">
			<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px', fontSize: '16px' }">
				个人简历
			</van-divider>
			<div class="m-resume-title">个人信息</div>
			<div class="m-user-text-box">
				<div class="m-user-text"><span>姓名：</span>令狐张豪</div>
				<div class="m-user-text"><span>经验：</span>3年</div>
				<div class="m-user-text"><span>邮箱：</span>linghuzhanghao@163.com</div>
				<div class="m-user-text"><span>电话：</span>173-1006-7051</div>
				<div class="m-user-text"><span>学历：</span>本科</div>
			</div>
			<div class="m-resume-title">求职意向</div>
			<div class="m-user-text-box" style="background: rgba(236, 115, 59, 0.9);">
				<div class="m-user-text"><span>期望职位：</span>前端工程师</div>
				<div class="m-user-text"><span>工作性质：</span>全职</div>
				<div class="m-user-text"><span>目标薪资：</span>13k</div>
			</div>
			<div class="m-resume-title">专业技能</div>
			<div class="m-user-text-box" style="background: rgba(44, 126, 199, 0.9);">
				<div class="m-user-text active-bottom">熟练掌握 HTML CSS 基本布局以及 html5+css3 新属性，熟悉 W3C 标准</div>
				<div class="m-user-text active-bottom">熟练 JavaScript、jquery 以及 ES6 常用语法</div>
				<div class="m-user-text active-bottom">熟练 scss 、less预编译</div>
				<div class="m-user-text active-bottom">熟练响应式布局和弹性盒模型，擅长 HTML 的 移动端 开发</div>
				<div class="m-user-text active-bottom">熟练 ajax，axios 技术与后台处理数据</div>
				<div class="m-user-text active-bottom">熟练使用 jQuery 、bootstrap、swiper、element UI、Vant、Echarts 等框架</div>
				<div class="m-user-text active-bottom">熟练使用 Vue 全家桶（Vue-cli+Vue-store+vue-router+vuex+axios）</div>
				<div class="m-user-text active-bottom">熟练使用Vue的SSR服务端渲染Nuxt.js框架</div>
				<div class="m-user-text active-bottom">熟练使用微信小程序开发技术跟官方提供的WeUi框架进行小程序开发</div>
				<div class="m-user-text active-bottom">熟练使用 git、svn进行代码管理</div>
			</div>
			<div class="m-resume-title">个人介绍</div>
			<div class="m-user-text-box" style="background: rgba(231, 184, 49, 0.9);">
				<div class="m-user-text active-height">{{sketch}}</div>
			</div>
			<div class="m-resume-title">工作经历</div>
			<div class="m-user-text-box" style="background: rgba(184,184,220, 0.9);">
				<div class="m-project">
					<table>
						<tr>
							<td style="width: 65px;">项目名称：</td>
							<td>儿童行为AI筛查服务版（微信小程序）</td>
						</tr>
						<tr>
							<td style="width: 65px;">工作描述：</td>
							<td>教师、医生审核视频端。</td>
						</tr>
						<tr>
							<td style="width: 65px;">责任描述：</td>
							<td>使用微信小程序原生开发。</td>
						</tr>
						<tr>
							<td>责任描述：</td>
							<td>
								<ul>
									<li v-for="item in childBehavior">
										<span>{{item.num}}</span>
										<em>{{item.text}}</em>
									</li>
								</ul>
							</td>
						</tr>
					</table>
				</div>
			</div>
			
			<div class="m-user-text-box" style="background: rgba(184,184,220, 0.9);">
				<div class="m-project">
					<table>
						<tr>
							<td style="width: 65px;">项目名称：</td>
							<td>恩启官网（www.ingcare.com）</td>
						</tr>
						<tr>
							<td style="width: 65px;">项目描述：</td>
							<td>此官网为恩启教育新版官网网站，更加明确对外展示了恩启的优势、教学团队、教学方法和恩启的最新动态。</td>
						</tr>
						<tr>
							<td style="width: 65px;">工作描述：</td>
							<td>使用vue 3x脚手架搭建项目，长期维护迭代更新。</td>
						</tr>
						<tr>
							<td>责任描述：</td>
							<td>
								<ul>
									<li v-for="item in enqiWebSite">
										<span>{{item.num}}</span>
										<em>{{item.text}}</em>
									</li>
								</ul>
							</td>
						</tr>
					</table>
				</div>
			</div>
			
			<div class="m-user-text-box" style="background: rgba(184,184,220, 0.9);">
				<div class="m-project">
					<table>
						<tr>
							<td style="width: 65px;">项目名称：</td>
							<td>轱辘轱辘可视化后台</td>
						</tr>
						<tr>
							<td style="width: 65px;">项目描述：</td>
							<td>一款展示给大B端的实时销售数据查看平台。</td>
						</tr>
						<tr>
							<td style="width: 65px;">工作描述：</td>
							<td>使用vue2.0版本，vue-cli 3.0脚手架、Element UI、Echarts。</td>
						</tr>
						<tr>
							<td>责任描述：</td>
							<td>
								<ul>
									<li v-for="item in visualization">
										<span>{{item.num}}</span>
										<em>{{item.text}}</em>
									</li>
								</ul>
							</td>
						</tr>
					</table>
				</div>
			</div>
			
			<div class="m-user-text-box" style="background: rgba(184,184,220, 0.9);">
				<div class="m-project">
					<table>
						<tr>
							<td style="width: 65px;">项目名称：</td>
							<td>轱辘轱辘后台管理系统</td>
						</tr>
						<tr>
							<td style="width: 65px;">项目描述：</td>
							<td>实时查看订单销售、数据统计、查看物流发货出库状态，内容管理、商品管理、订单管理、商铺管理，经销商、促销、进销存、账户管理。</td>
						</tr>
						<tr>
							<td style="width: 65px;">工作描述：</td>
							<td>使用 jqueryUi、jquery、EasyUI、echarts 开发。</td>
						</tr>
						<tr>
							<td>责任描述：</td>
							<td>
								<ul>
									<li v-for="item in glBackstage">
										<span>{{item.num}}</span>
										<em>{{item.text}}</em>
									</li>
								</ul>
							</td>
						</tr>
					</table>
				</div>
			</div>
			
			<div class="m-user-text-box" style="background: rgba(184,184,220, 0.9);">
				<div class="m-project">
					<table>
						<tr>
							<td style="width: 65px;">项目名称：</td>
							<td>轱辘轱辘（app）（手机应用商店可下载）</td>
						</tr>
						<tr>
							<td style="width: 65px;">项目描述：</td>
							<td>轮胎经销商 APP，解决轮胎下单、付款、发货跟踪、物流跟踪等一整套完整的线上销售体系。</td>
						</tr>
						<tr>
							<td style="width: 65px;">工作描述：</td>
							<td>使用 jquery mobile 模板、mescroll、jquery 开发。</td>
						</tr>
						<tr>
							<td>责任描述：</td>
							<td>
								<ul>
									<li v-for="item in gulugulu">
										<span>{{item.num}}</span>
										<em>{{item.text}}</em>
									</li>
								</ul>
							</td>
						</tr>
					</table>
				</div>
			</div>
			
			<div class="m-user-text-box" style="background: rgba(184,184,220, 0.9);">
				<div class="m-project">
					<table>
						<tr>
							<td style="width: 65px;">项目名称：</td>
							<td>小轱（app）（手机应用商店可下载）</td>
						</tr>
						<tr>
							<td style="width: 65px;">项目描述：</td>
							<td>手机上的后台端，通过登录后区分不同角色实现不同功能，如：改价、审核订单、审核还款、发货，出库、数据统计等。</td>
						</tr>
						<tr>
							<td style="width: 65px;">工作描述：</td>
							<td>使用 jquery mobile 模板、mescroll、jquery、echarts 开发。</td>
						</tr>
						<tr>
							<td>责任描述：</td>
							<td>
								<ul>
									<li v-for="item in xiaogu">
										<span>{{item.num}}</span>
										<em>{{item.text}}</em>
									</li>
								</ul>
							</td>
						</tr>
					</table>
				</div>
			</div>
			<div style="width: 100%;height: 60px;"></div>
		</section>
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
				sketch: '本人性格开朗、为人诚恳、乐观向上、拥有较强的学习能力和适应能力； 具备一定 web 前端开发方面的知识和经验； 熟悉产品开发流程, 具备很强的产品规划, 需求分析, 交互能力, 能独立承担 APP 和 web 项目的管控工作；全身心投入并以真诚负责的态度对待工作, 寻求自我价值的不断提升。',
				visualization: [{
						"num": "1.",
						"text": "使用vue3.0脚手架搭建、路由的配置；"
					},
					{
						"num": "2.",
						"text": "使用 promise 二次封装 axios 与后台进行交互；"
					},
					{
						"num": "3.",
						"text": "使用弹性盒子布局、scss 进行 css 预编译；"
					},
					{
						"num": "4.",
						"text": "登录成功后加载 echarts 3D 地球组件 3s 后进入数据平台；"
					},
					{
						"num": "5.",
						"text": "使用 echarts 完成平台柱状图、线形图、饼图、地图等展示；"
					}
				],
				glBackstage: [{
						"num": "1.",
						"text": "使用 jqueryUi 框架、EasyUI、scss 预编译进行整体页面布局； "
					},
					{
						"num": "2.",
						"text": "使用富文本编辑器完成新闻模块的管理与发布；"
					},
					{
						"num": "3.",
						"text": "完成订单模块订单转出库、添加、分配仓库；"
					},
					{
						"num": "4.",
						"text": "完成商品模块的商品添加、删除、查询，规格管理、品牌管理、属性管理；"
					},
					{
						"num": "5.",
						"text": "完成订单对公转账审核、还款对公审核、售后审核模块；"
					},
					{
						"num": "6.",
						"text": "使用 echarts 完成订单数据统计、销售统计；"
					}
				],
				childBehavior: [{
						"num": "1.",
						"text": "使用Promise封装request请求，使用wx.onNetworkStatusChange方法获取到网	络状态实时存储在app.js里作为全局使用"
					},
					{
						"num": "2.",
						"text": "在app.js里定义方法，先判断token是否存在，无则去登录页，有的情况下	token正常则进入页面，token失效过期则进去登录页面"
					},
					{
						"num": "3.",
						"text": "封装公共方法：登录（包含失效、过期、被挤掉线等状态判断）、错误回调、	提示、手机号，密码校验、长按保存图片等"
					},
					{
						"num": "4.",
						"text": "根据登录成功后查询的身份状态显示老师或医生的数据"
					},
					{
						"num": "5.",
						"text": "实现点击审核去往AI20页面点击审核视频去往视频审核页；"
					},
					{
						"num": "6.",
						"text": "视频审核页：实现初始化获取到视频资源，教师：先查看是否有审核记录，有	则定位到审核到的第i条视频那，无则从第一个视频开始审核，返回上一个后	如重新选择了一种风险类型则视为修改操作。医生：跟教师操作类似，多了一	步是否同意教师的判断，具体本人可详细讲述。"
					}
				],
				enqiWebSite: [{
						"num": "1.",
						"text": "使用vue 3x脚手架搭建项目，scss预编译，弹性盒布局、rem"
					},
					{
						"num": "2.",
						"text": "使用router配置路由，使用beforeEach动态添加页面关键词和描述；"
					},
					{
						"num": "3.",
						"text": "封装公共组件：导航组件、地图组件(地图调用百度地图)、机构中心切换组件；"
					},
					{
						"num": "4.",
						"text": "使用swiper完成首页banner轮播、机构展示、机构详情里的图片切换等；"
					},
					{
						"num": "5.",
						"text": "使用父传子实现网站中英文切换功能（实现方法个人描述）；"
					},
					{
						"num": "6.",
						"text": "实现PC端和移动端响应式切换（实时动态检测窗口变化）低于800为移动端；"
					},
					{
						"num": "7.",
						"text": "用两套css样式、设计图同时兼容两端，使用media去兼容iPad样式；"
					},
					{
						"num": "8.",
						"text": "因框架都是单页面应用百度只能爬取到首页，配置预编译打包（将想让百度爬取               	到的页面打包成多个文件夹）"
					},
					{
						"num": "9.",
						"text": "根据运营部门的需求、产品的规划长期负责官网的维护更新迭"
					}
				],
				gulugulu: [{
						"num": "1.",
						"text": "使用 jquery mobile 模板，rem 布局、sass 预编译，jquery 开发；"
					},
					{
						"num": "2.",
						"text": "完成首页、动态、经销商、个人中心四大模块；"
					},
					{
						"num": "3.",
						"text": "使用 mescroll 框架完成 app 的下拉刷新、上拉加载；"
					},
					{
						"num": "4.",
						"text": "封装轻提示组件、加购弹层组件、消息确认组件，方便其他地方调用；"
					},
					{
						"num": "5.",
						"text": "完成首页搜索、商品分类页搜索、商品列表页通过 es 进行筛选查询；"
					},
					{
						"num": "6.",
						"text": "完成商品订单列表页根据内幕搜索商品；"
					},
					{
						"num": "7.",
						"text": "完成商品结算页微信支付、授信支付、对公转账功能开发；"
					},
					{
						"num": "8.",
						"text": "根据订单状态动态显示订单（待收货、待支付等）；"
					},
					{
						"num": "9.",
						"text": "结合后台人员完成欠款查询渲染、还款功能开发等；"
					},
					{
						"num": "10.",
						"text": "对接 im 通信完成客户与业务员之间联系改价；"
					},
					{
						"num": "11.",
						"text": "负责产品后期的维护、优化、迭代更新；"
					}
				],
				xiaogu: [{
						"num": "1.",
						"text": "使用 jquery mobile 模板，rem 布局、sass 预编译，jquery 开发；"
					},
					{
						"num": "2.",
						"text": "使用 mescroll 框架完成 app 的下拉刷新、上拉加载；"
					},
					{
						"num": "3.",
						"text": "与安卓人员配合完成首次打开 app 的隐私协议勾选功能；"
					},
					{
						"num": "4.",
						"text": "根据登录后返回的权限动态显示“我的”页的内容；"
					},
					{
						"num": "5.",
						"text": "完成订单详情页根据身份实现不同功能（业务员：可看到订单详情页的三包信息、仓库信息、物流信息；财务：在商品信息上显示改价按钮并可以实时改价功能，超过最低价需审核；库管：可在订单详情页看到出库按钮并实施出库功能；司机：可在订单详情页看到发货按钮并实施发货）"
					},
					{
						"num": "6.",
						"text": "完成订单改最低价审核、对公转账订单审核、还款对公转账审核、售后申请审核等审核功能；"
					},
					{
						"num": "7.",
						"text": "使用 echarts 完成 VIP 数据统计功能，展示品牌销售排行、季度销售排行，使用 datepicker 控件完成日历查询每一天的数据；"
					},
					{
						"num": "8.",
						"text": "负责产品后期的维护、优化、迭代更新；"
					}
				],
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
<style lang="scss" scoped>
	$fontSize: 18px;
	$fontColor: #555555;
	$color: #FFFFFF;
	$fontSmallSize: 16px;
	$fontLineHeight:25px;
	$padding:0 60px;

	.width {
		width: 100% !important;
	}

	// 下载简历按钮
	.ai_download {
		position: fixed;
		bottom: 8%;
		right: 2%;

		a {
			color: $color;
		}
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
		background: $color;
		border-right: 1px solid #DCDFE6;

		>p {
			width: 100%;
			padding-left: 6%;
			line-height: 50px;
			border-bottom: 1px solid #DCDFE6;
			border-top: 1px solid #DCDFE6;
			font-size: $fontSize;
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
		background: $color;
		box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.08);
		margin: 30px auto;
		overflow: hidden;

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
		padding: $padding;
		display: flex;
		justify-content: space-between;
		align-items: center;

		span {
			width: 300px;
			color: $fontColor;
			font-size: $fontSize;
		}
	}

	.li_home_main_right_user_skill {
		width: 100%;
		padding: $padding;

		p {
			color: $fontColor;
			font-size: $fontSmallSize;
			line-height: $fontLineHeight;
		}
	}

	.lh_my_introduce {
		padding: $padding;
		font-size: $fontSmallSize;
		color: $fontColor;
		line-height: $fontLineHeight;
	}

	// 项目经验
	.lh_home_project_box {
		width: 100%;
		font-size: $fontSize;
		color: $fontColor;
		margin-bottom: 50px;

		em {
			font-style: initial;
		}
	}

	.lh_home_project_title {
		padding: $padding;
	}

	.lh_home_project_describe {
		width: 100%;
		padding: 6px 0 3px 80px;
		display: flex;

		span {
			display: block;
			width: 95px;
		}

		em {
			width: 80%;
		}
	}

	.lh_home_duty_describe {
		padding: 6px 0 3px 80px;
	}

	.lh_home_duty_p {
		ul {
			margin-left: 100px;

			li {
				font-size: $fontSize;
				color: $fontColor;
				display: flex;
				line-height: 28px;

				span {
					display: block;
					width: 25px;
				}
			}
		}
	}

	$mFontSize: 13px;
	$mFontColor:#444444;
	$mlineHeight: 22px;

	@media screen and(max-width:800px) {
		.m-home {
			width: 90%;
			margin: 80px auto 0;
			box-sizing: border-box;
		}

		.m-resume-title {
			color: darkcyan;
			font-size: 15px;
			font-weight: bold;
			padding: 5px 0;
		}
	}

	.m-user-text-box {
		padding: 10px;
		background: rgba(19, 163, 155, 0.9);
		border-radius: 6px;
		margin-bottom: 20px;
	}

	.m-user-text {
		display: flex;
		align-items: center;
		font-size: $mFontSize;
		color: #fff;
		font-weight: bold;
		line-height: $mlineHeight;
	}

	.active-bottom {
		margin-bottom: 5px;
		line-height: 18px;
	}

	.active-height {
		line-height: 17px;
	}

	.m-project {
		width: 100%;
		font-size: $mFontSize;
		color: #fff;
		font-weight: bold;
		line-height: $mlineHeight;

		table {
			border-spacing: 0;
			border: 1px solid #fff;

			td {
				border: 1px solid #fff;
				ul>li>em{
					font-style: initial;
				}
			}
		}
	}

	.m-project-describe {
		display: flex;
		width: 100%;

		em {
			display: block;
			font-style: initial;
			width: 165px;
		}

		span {
			display: block;
		}
	}
</style>

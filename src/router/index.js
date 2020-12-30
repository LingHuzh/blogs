import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'web前端工程师简历',
			content: {
				keywords: '令狐张豪、个人简历、web前端工程师、web前端工程师简历',
				description: ''
			}
		}
	},
	{
		path: '/blogs',
		name: 'Blogs',
		component: () => import('../components/pages/Blogs.vue'),
		meta: {
			title: '令狐张豪-个人博客-web前端工程师简历',
			content: {
				keywords: '令狐张豪、个人简历、web前端工程师、web前端工程师简历',
				description: ''
			}
		}
	},
	{
		path: '/production',
		name: 'Production',
		component: () => import('../components/pages/Production.vue'),
		meta: {
			title: '令狐张豪-个人作品-web前端工程师简历',
			content: {
				keywords: '令狐张豪、个人简历、web前端工程师、web前端工程师简历',
				description: ''
			}
		}
	},
	{
		path: '/information',
		name: 'Information',
		component: () => import('../components/pages/Information.vue'),
		meta: {
			title: '令狐张豪-我的资源-web前端工程师简历',
			content: {
				keywords: '令狐张豪、个人简历、web前端工程师、web前端工程师简历',
				description: ''
			}
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: '新之助的痕迹',
			content: {
				keywords: '令狐张豪、博客',
				description: ''
			}
		}
	},
	{
		path: '/blogs',
		name: 'Blogs',
		component: () => import('../components/pages/Blogs.vue'),
		meta: {
			title: '令狐张豪-个人简历',
			content: {
				keywords: '令狐张豪、个人简历',
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/1.render',
		name: '1Render',
		component: () => import('../views/1.render')
	},
	{
		path: '/2.jsx',
		name: '2Jsx',
		component: () => import('../views/2.jsx')
	},
	{
		path: '/3.functional',
		name: '3Functional',
		component: () => import('../views/3.functional')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

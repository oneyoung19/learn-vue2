import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import vueRoutes from './vue'
import vueRouterRoutes from './vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	vueRoutes,
	vueRouterRoutes,
	{
		path: '/404',
		name: '404',
		component: () => import('../views/404.vue')
	},
	{
		path: '*',
		redirect: '/404'
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

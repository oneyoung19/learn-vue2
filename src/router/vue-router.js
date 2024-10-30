export default {
	path: '/vue-router',
	name: 'VueRouter',
	component: () => import('../views/vue-router/index.vue'),
	children: [
		// {
		// 	path: '1.basic',
		// 	name: 'VueRouter1Basic',
		// 	component: () => import('../views/vue-router/1.basic')
		// }
	]
}

export default {
	path: '/vuex',
	name: 'Vuex',
	component: () => import('../views/vuex/index.vue'),
	children: [
		// {
		// 	path: '1.basic',
		// 	name: 'Vuex1Basic',
		// 	component: () => import('../views/vuex/1.basic')
		// }
	]
}

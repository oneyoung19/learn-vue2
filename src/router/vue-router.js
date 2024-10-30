export default {
	path: '/vue-router',
	name: 'VueRouter',
	component: () => import('../views/vue-router/index.vue'),
	children: [
		{
			path: '1.resolve',
			name: 'VueRouter1Resolve',
			component: () => import('../views/vue-router/1.resolve')
		},
		{
			path: '2.route',
			name: 'VueRouter2Route',
			component: () => import('../views/vue-router/2.route')
		},
		{
			path: '3.hash',
			name: 'VueRouter3Hash',
			component: () => import('../views/vue-router/3.hash')
		},
		{
			path: '4.history',
			name: 'VueRouter4History',
			component: () => import('../views/vue-router/4.history')
		}
	]
}

export default {
	path: '/vue',
	name: 'Vue',
	component: () => import('../views/vue/index.vue'),
	children: [
		{
			path: '1.render',
			name: 'Vue1Render',
			component: () => import('../views/vue/1.render')
		},
		{
			path: '2.jsx',
			name: 'Vue2Jsx',
			component: () => import('../views/vue/2.jsx')
		},
		{
			path: '3.functional',
			name: 'Vue3Functional',
			component: () => import('../views/vue/3.functional')
		},
		{
			path: '4.keep-alive',
			name: 'Vue4KeepAlive',
			component: () => import('../views/vue/4.keep-alive')
		},
		{
			path: '5.dynamic-component',
			name: 'Vue5DynamicComponent',
			component: () => import('../views/vue/5.dynamic-component')
		},
		{
			path: '6.async-component',
			name: 'Vue6AsyncComponent',
			component: () => import('../views/vue/6.async-component')
		},
		{
			path: 'vue-compile',
			name: 'VueCompile',
			component: () => import('../views/vue/vue-compile')
		},
		{
			path: 'vue-extend',
			name: 'VueExtend',
			component: () => import('../views/vue/vue-extend')
		},
		{
			path: 'source/1.reactive',
			name: 'VueSource1Reactive',
			component: () => import('../views/vue/source/1.reactive')
		}
	]
}


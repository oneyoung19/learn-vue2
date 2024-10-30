<template>
	<div id="vue-extend"></div>
</template>

<script>
import Vue from 'vue'
export default {
	data () {
		return {
		}
	},
	computed: {},
	watch: {},
	created () {},
	mounted () {
		// 使用Vue.extend创建子类 Vue.extend(options)
		const SubVue = Vue.extend({
			data () {
				return {
				}
			},
			render (h) {
				return h('h1', 'Vue Extend')
			}
		})
		console.dir(SubVue)
		const instance = new SubVue()
		console.log(instance.$el) // undefined
		instance.$mount('#vue-extend')
		console.log(instance.$el) // <h1>Vue Extend</h1>
	},
	methods: {
	}
}
</script>

<style scoped lang="less">
</style>

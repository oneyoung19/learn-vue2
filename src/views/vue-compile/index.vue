<template>
	<div>
		<CompileComponent></CompileComponent>
	</div>
</template>

<script>
// 只在完整版时可用
const { render, staticRenderFns } = window.Vue.compile('<div>{{msg}}</div>')

console.log(render)
console.log(staticRenderFns)
const CompileComponent = {
	data () {
		return {
			msg: 'Vue Compile'
		}
	},
	render,
	staticRenderFns
}

export default {
	components: {
		CompileComponent
	},
	data () {
		return {
		}
	},
	computed: {},
	watch: {},
	created () {},
	mounted () {},
	methods: {
	}
}
</script>

<style scoped lang="less">
</style>

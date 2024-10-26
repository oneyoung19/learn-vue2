<template>
	<div>
		<RenderComponent></RenderComponent>
	</div>
</template>

<script>
const RenderComponent = {
	props: {
		level: {
			type: String,
			default: '1'
		}
	},
	data () {
		return {
			msg: 'Hello World'
		}
	},
	render (h) {
		return h(`h${this.level}`, {
			'class': 'h1'
		}, [h('span', {
			'class': 'span'
		}, this.msg)])
	}
}

export default {
	components: {
		RenderComponent
	},
	data () {
		return {
		}
	},
	methods: {
	}
}
</script>

<style scoped lang="less">
</style>

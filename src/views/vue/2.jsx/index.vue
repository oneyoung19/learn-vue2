<template>
	<div>
		<RenderComponent></RenderComponent>
	</div>
</template>

<script>
const RenderComponent = {
	data () {
		return {
			msg: 'JSX'
		}
	},
	render (h) {
		return (
			<h1 onClick={this.handleClick}>
				<span style="margin-right: 10px;">{this.msg}</span>
				<span vOn:click={this.handleHelloWorld}>Hello World</span>
			</h1>
		)
	},
	methods: {
		handleClick () {
			console.log('click')
		},
		handleHelloWorld () {
			console.log('Hello World')
		}
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

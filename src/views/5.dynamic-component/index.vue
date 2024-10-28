<template>
	<div>
		<h2>vue2 包装组件</h2>
		<ul>
			<li v-for="item in componentList" :key="item">
				<DynamicComponent :type="item" />
			</li>
		</ul>
		<h2>vue2 条件渲染</h2>
		<ul>
			<li v-for="item in componentList" :key="item">
				<TextComponent v-if="item === 'Text'" />
				<ImageComponent v-else-if="item === 'Image'" />
				<JsonComponent v-else-if="item === 'Json'" />
			</li>
		</ul>
		<h2>vue2 动态组件</h2>
		<ul>
			<li v-for="item in componentList" :key="item">
				<component :is="`${item}Component`" />
			</li>
		</ul>
	</div>
</template>

<script>
const DynamicComponent = {
	functional: true,
	props: {
		// Text Image Json
		type: {
			type: String,
			default: 'Text'
		}
	},
	render(h, ctx) {
		return (
			<div>
				{ctx.props.type}
			</div>
		)
	}
}
const TextComponent = {
	render(h, ctx) {
		return <div>Text</div>
	}
}
const ImageComponent = {
	render(h, ctx) {
		return <div>Image</div>
	}
}
const JsonComponent = {
	render(h, ctx) {
		return <div>Json</div>
	}
}
export default {
	components: {
		DynamicComponent,
		TextComponent,
		ImageComponent,
		JsonComponent
	},
	data () {
		return {
			componentList: ['Text', 'Image', 'Json']
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

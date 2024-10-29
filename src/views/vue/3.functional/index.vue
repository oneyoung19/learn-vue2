<template>
	<div>
		<RenderComponent name="Andy" id="my-component" @click="handleMyComponentClicked">
			<p class="children">Children</p>
			<template v-slot:foo>
				<p>Foo Slot</p>
			</template>
			<template v-slot:bar="slotProps">
				<div>
					{{ slotProps.msg }}
				</div>
			</template>
		</RenderComponent>
		<FunctionalTemplate msg="Click me!">Button</FunctionalTemplate>
	</div>
</template>

<script>
import FunctionalTemplate from './FunctionalTemplate.vue'

const RenderComponent = {
	functional: true,
	props: {
		name: {
			type: String,
			default: ''
		}
	},
	render (h, context) {
		console.log(context, context.slots())
		return (
			<h1 attrs={context.data.attrs} on={context.data.on}>
				<span>{context.props.name}</span>
				<span> component </span>
				{context.slots().foo}
				{context.scopedSlots.bar({
					msg: `${context.props.name}2`
				})}
			</h1>
		)
	}
}

export default {
	components: {
		RenderComponent,
		FunctionalTemplate
	},
	data () {
		return {
		}
	},
	methods: {
		handleMyComponentClicked () {
			console.log('My Component Clicked')
		}
	}
}
</script>

<style scoped lang="less">
</style>

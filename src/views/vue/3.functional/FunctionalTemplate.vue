<template functional>
	<!-- 如果在template中使用functional组件 那么默认是能访问到context上下文的 -->
	<div>
		<button
			class="btn btn-primary"
			v-bind="data.attrs"
			v-on="listeners"
		>
			<slot/>
		</button>
		<p>{{ props.msg }}</p>
	</div>
</template>

<script>
export default {
	props: {
		msg: {
			type: String,
			default: ''
		}
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

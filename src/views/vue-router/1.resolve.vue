<template>
	<div></div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	computed: {},
	watch: {},
	created () {
		const router = this.$router
    const current = this.$route
    const { location, route, href } = router.resolve(
      '/vue/vue-extend',
      current,
      false
    )
		console.log({
			location,
			route,
			href
		})
	},
	mounted () {},
	methods: {
	}
}
</script>

<style scoped lang="less">
</style>

<template>
  <div>
		<p>{{ num }}</p>
		<button @click="handleClickAdd">Add</button>
		<button @click="handleClickToHome">Click to Home</button>
	</div>
</template>

<script>
export default {
	name: 'IndexKeepAlive',
  data () {
    return {
			num: 0
    }
  },
	created() {
		console.log('IndexKeepAlive created')
	},
	activated() {
		console.log('IndexKeepAlive activated')
	},
	deactivated() {
		console.log('IndexKeepAlive deactivated')
	},
	methods: {
		handleClickAdd() {
			this.num++
		},
		handleClickToHome() {
			this.$router.push({
				name: 'Home'
			})
		}
  }
}
</script>

<style scoped lang="less">
</style>

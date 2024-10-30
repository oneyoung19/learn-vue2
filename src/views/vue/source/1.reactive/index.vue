<template>
	<div>
		<p>
			<span>固定值</span>
			{{ value }}
			<button @click="handleValue">click</button>
		</p>
		<p>
			<span>对象</span>
			{{ obj }}
			<button @click="handleObj">click</button>
		</p>
		<p>
			<span>数组</span>
			{{ arr }}
			<button @click="handleArr">click</button>
		</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			// 固定值
			value: 1,
			// 对象
			obj: {
				a: 1
			},
			// 数组
			arr: [1, 2, { c: 3 }, [4]]
		}
	},
	computed: {},
	watch: {},
	created () {},
	mounted () {},
	methods: {
		handleValue () {
			this.value += 1
		},
		handleObj () {
			// this.obj.a += 1 // 生效

			// this.obj.b = 2 // 不生效

			this.obj = { // 生效
				b: 2
			}
		},
		handleArr () {
			// this.arr.push(4) // 生效

			this.arr[0]++ // vm.items[index] = newValue 不生效
			// https://github.com/vuejs/vue/issues/8562 笔者认为 这是个性能取舍的问题。数组中的普通值，不会进行响应式处理，而数组中的对象则会进行响应式处理。

			// this.arr[2].c++ // 生效

			// this.arr[3][0]++ // 不生效
		}
	}
}
</script>

<style scoped lang="less">
</style>

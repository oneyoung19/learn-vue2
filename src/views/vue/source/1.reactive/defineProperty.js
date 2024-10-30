const obj = {
	a: 1,
	b: 2
}
const newObj = {}

Object.defineProperty(newObj, 'a', {
	get () {
		return obj.a
	},
	set (newVal) {
		obj.a = newVal
		console.log('set', newVal)
	}
})

console.log(newObj.a)
newObj.a = 3
console.log(newObj.a)

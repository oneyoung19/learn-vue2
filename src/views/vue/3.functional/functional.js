/*
假设一个组件没有管理任何状态，也没有监听任何传递给它的状态，也没有生命周期方法。而只是一个接受一些 prop。

那么这个组件，我们可以改造成函数式组件。（没有响应式数据，也没有实例 (没有 this 上下文)）

组件需要的一切都是通过 context 参数传递，它是一个包括如下字段的对象：
- props：提供所有 prop 的对象
- children：VNode 子节点的数组
- slots：一个函数，返回了包含所有插槽的对象
- scopedSlots：(2.6.0+) 一个暴露传入的作用域插槽的对象。也以函数形式暴露普通插槽。
- data：传递给组件的整个数据对象，作为 createElement 的第二个参数传入组件
- parent：对父组件的引用
- listeners：(2.3.0+) 一个包含了所有父组件为当前组件注册的事件监听器的对象。这是 data.on 的一个别名。
- injections：(2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的 property。

由上面的 context 参数可知，函数式组件的最大特点就是props渲染，不支持data methods等等。
*/
Vue.component('my-component', {
  functional: true,
  // Props 是可选的 vue@2.3.0+
  props: {
    // ...
  },
  // 为了弥补缺少的实例
  // 提供第二个参数作为上下文
  render: function (createElement, context) {
    // ...
  }
})

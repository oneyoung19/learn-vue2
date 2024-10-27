/*
Props:
	- `include` - 字符串或正则表达式。只有名称匹配的组件会被缓存。
	- `exclude` - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
	- `max` - 数字。最多可以缓存多少组件实例。


<!-- 基本 -->
<keep-alive>
  <component :is="view"></component>
</keep-alive>

<!-- 多个条件判断的子组件 -->
<keep-alive>
  <comp-a v-if="a > 1"></comp-a>
  <comp-b v-else></comp-b>
</keep-alive>

<!-- 和 `<transition>` 一起使用 -->
<transition>
  <keep-alive>
    <component :is="view"></component>
  </keep-alive>
</transition>

*/



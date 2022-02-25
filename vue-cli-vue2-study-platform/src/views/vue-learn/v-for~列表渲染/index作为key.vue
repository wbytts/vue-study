
<template>
  <div>
    <button @click="handleClick">删除第二个</button>
    <ul>
      <li v-for="item in arr">
        {{item}}
        <input type="text">
      </li>
    </ul>
  </div>
</template>

<script>
export const name = 'v-for# index作为key'

export default {
  data() {
    return {
      arr: ['111', '222', '333']
    }
  },
  methods: {
    handleClick() {
      this.arr.splice(1, 1)
      /*
        数组改变了之后：
          1. vue对比新旧数组，发现 1===1，保持不变
          2. 然后再对比 2，发现 2 变成了 3，那么就把 2 修改为 3，原来第二行的元素都可以复用，只把数字改一下就可以了
          3. 然后在对比 3 与 undefined，发现 3 被删了，索引把第三行的元素删掉

        当删掉[1,2,3]中的 2 之后，数组的长度由 3 变成了 2，那么原来数字 3 的索引就变成了数字 2 的索引了。
          1. vue对比 key 为 0 的值，发现都是 1，保持不变
          2. vue对比 key 为 1 的值，发现从 2 变成了 3，元素复用， 修改元素上面的文字
          3. vue对比 key 为 2 的值，发现被删掉了，所以删掉第三行元素

        而对于使用 id 作为 key,那么每条数据都有了唯一的标识，当删掉[{id:'1',value: 1},{id: '2',value: 2}, {id: '3', value:3}]中的第二个，整个过程如下
          1. vue取出新数据第一项的 id，然后在原来数据里面寻找，发现存在相同 id 的数据，而且数据没有变化，所以保持不变
          2. vue继续取第二项的 id，发现是 3，然后从原来数据里面也找到了 3，所以 3 保留
          3. 这时候旧数据里面剩了 id 为 2 的数据，而新的里面没有了，所以删掉。
      */
    }
  }
}
</script>

<style>

</style>

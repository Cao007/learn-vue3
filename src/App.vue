<template>
  <div>
    <input type="text" placeholder="输入商品名称" v-model="inputGoodName">
    <table>
      <thead>
        <tr>
          <th>商品</th>
          <th>单价</th>
          <th> 数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in searchGoods" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td><button @click="handleAdd(item, index)">+</button> {{ item.num }} <button
              @click="handleSub(item, index)">-</button></td>
          <td><button @click="deleteGood(index)">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <td colspan="4">总价：{{ total }}</td>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const goods = ref([
  {
    name: '商品1',
    price: 1,
    num: 1
  },
  {
    name: '商品2',
    price: 2,
    num: 2
  },
  {
    name: '商品3',
    price: 3,
    num: 3
  }
])

// 计算总价
let total = computed(() => {
  return goods.value.reduce((pre, cur) => {
    return pre + cur.price * cur.num
  }, 0)
})

// 增加数量
const handleAdd = (item: any, index: number) => {
  if (item.num >= 10) {
    alert('商品数量不能超过10')
    return
  }
  goods.value[index].num++
}

// 减少数量
const handleSub = (item: any, index: number) => {
  if (item.num <= 1)
    return
  goods.value[index].num--
}

// 删除商品
const deleteGood = (index: number) => {
  goods.value.splice(index, 1)
}

// 模糊搜索商品名
const inputGoodName = ref('')
const searchGoods = computed(() => {
  return goods.value.filter((item: any) => {
    return item.name.includes(inputGoodName.value)
  })
})

</script>

<style scoped>
table,
td,
th {
  border: 1px solid #000;
  border-collapse: collapse;
  text-align: center;
}

td,
th {
  padding: 10px;
}

tfoot>td {
  text-align: right;
}
</style>
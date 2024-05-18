<template>
  <div class="tab">
    <div class="tab-titles">
      <div class="tab-title-item" v-for="(item, index) in data" :key="item.name"
        :class="[curIndex === index ? 'active' : '']" @click="handleClick(item, index)">
        {{ item.name }}
      </div>
    </div>
    <component :is="curComp"></component>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, markRaw } from 'vue';
import TestA from './components/TestA.vue';
import TestB from './components/TestB.vue';
import TestC from './components/TestC.vue';

// 渲染的组件和数据
const data = ref([
  {
    name: 'TestA',
    comp: markRaw(TestA)
  },
  {
    name: 'TestB',
    comp: markRaw(TestB)
  },
  {
    name: 'TestC',
    comp: markRaw(TestC)
  }
])

// 当前组件和下标
let curComp = shallowRef(TestA)
let curIndex = ref(0)

// 点击切换组件
const handleClick = (item: any, index: number) => {
  curComp.value = item.comp
  curIndex.value = index
}
</script>

<style scoped lang="less">
.tab {
  width: 400px;
  height: 200px;

  .tab-titles {
    display: flex;
    justify-content: space-between;
    border: 1px solid #ccc;
    width: 100%;
    height: 40px;
    line-height: 40px;

    .tab-title-item {
      border: 1px solid #ccc;
      width: 100px;
      height: 100%;
      text-align: center;
      cursor: pointer;
    }
  }
}

.active {
  background-color: pink;
}
</style>
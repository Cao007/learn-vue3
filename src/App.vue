<template>
  <div>
    <AsyncComp />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import TestB from './components/TestB.vue'
import TestC from './components/TestC.vue'

// 异步组件
const AsyncComp = defineAsyncComponent({
  // 加载函数
  loader: () => import('./components/TestA.vue'),

  // 加载异步组件时使用的组件
  loadingComponent: TestB,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 20000,

  // 加载失败后展示的组件
  errorComponent: TestC,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
})

</script>

<style scoped></style>
<template>
  <div>
    <h1>App</h1>
    <button @click="emit1">App-emit1</button>
    <button @click="emit2">App-emit2</button>
    <Son1></Son1>
    <Son2></Son2>
  </div>
</template>

<script setup lang="ts">
import Son1 from './components/Son1.vue';
import Son2 from './components/Son2.vue';

// 1.获取当前组件实例
const instance: any = getCurrentInstance();
const emit1 = () => {
  // 2.通过$bus属性上的emit方法触发事件
  instance?.proxy?.$bus.emit('on-num', 100);
}
const emit2 = () => {
  instance?.proxy?.$bus.emit('on-name', '张三');
}
</script>

<style scoped></style>
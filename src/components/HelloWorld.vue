<template>
  <div>
    <h1 ref="h1DOM">{{ text }}</h1>
    <button @click="changeText">修改</button>
  </div>
</template>

<script setup lang="ts">
import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const text = ref('Hello World');
const h1DOM = ref<HTMLHeadingElement | null>(null);
const changeText = () => {
  if (h1DOM.value) {
    text.value = 'Vue3';
  }
};

// 组件创建时
onBeforeMount(() => {
  console.log('onBeforeMount ', h1DOM.value?.innerText, h1DOM.value);
});

// 组件挂载时
onMounted(() => {
  console.log('onMounted ', h1DOM.value?.innerText, h1DOM.value);
});

// 组件更新前
onBeforeUpdate(() => {
  console.log('onBeforeUpdate ', h1DOM.value?.innerText, h1DOM.value);
});

// 组件更新后
onUpdated(() => {
  console.log('onUpdated ', h1DOM.value?.innerText, h1DOM.value);
});

// 组件卸载前
onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

// 组件卸载后
onUnmounted(() => {
  console.log('onUnmounted');
});

// 组件激活时
onActivated(() => {
  console.log('onActivated');
});

// 组件失活时
onDeactivated(() => {
  console.log('onDeactivated');
});

</script>

<style scoped></style>
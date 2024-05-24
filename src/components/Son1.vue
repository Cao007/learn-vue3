<template>
    <div>
        <h1>Son1</h1>
    </div>
</template>

<script setup lang="ts">

// 1.获取当前组件实例
const instance: any = getCurrentInstance();
// 2.通过组件实例获取全局事件总线，监听指定的事件
instance?.proxy?.$bus.on('on-num', (num: number) => {
    console.log('Son1收到数据', num);
});

</script>

<style scoped></style>
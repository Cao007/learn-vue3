<template>
    <div>
        <h1>Son2</h1>
    </div>
</template>

<script setup lang="ts">

// 1.获取当前组件实例
const instance: any = getCurrentInstance();
// 2.通过组件实例获取全局事件总线，监听所有事件
instance?.proxy?.$bus.on('*', (type: string, data: any) => {
    console.log(type, data)
})


</script>

<style scoped></style>
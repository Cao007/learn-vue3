<template>
    <div>
        <h1>GrandSon组件</h1>
        <button @click="changeColor">在GrandSon组件中 修改color的值</button>
        <div class="box"></div>
    </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';

const color: any = inject('color')
const changeColor = () => {
    color.value = 'red'
}
</script>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: v-bind(color);
}
</style>
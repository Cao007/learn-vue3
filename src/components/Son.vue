<template>
    <div>
        <h1>Son组件</h1>
        <button @click="changeColor">在Son组件中 修改color的值</button>
        <div class="box"></div>
        <GrandSon></GrandSon>
    </div>
</template>

<script setup lang="ts">
import GrandSon from './GrandSon.vue';

const color: any = inject('color')
const changeColor = () => {
    color.value = 'red'
}

</script>

<style scoped>
.box {
    width: 200px;
    height: 200px;
    background-color: v-bind(color);
}
</style>
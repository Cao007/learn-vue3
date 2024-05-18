<template>
    <div>{{ title }}</div>
    <div>{{ arr }}</div>
    <button @click="changeTitle"> changeTitle </button>
    <button @click="changeArr"> changeArr </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// 1.父传子，props接收
const props = withDefaults(defineProps<
    {
        title: string,
        arr: number[]
    }>(),
    {
        title: '默认值',
        arr: () => [0]
    }
);
// 打印props接受到的值
console.log("title ", props.title);
console.log("arr ", props.arr);


// 2.子传父，emit抛出自定事件
const emit = defineEmits<{
    (e: 'changeTitle', value: string): void,
    (e: 'changeArr', value: number[]): void
}>();
const changeTitle = () => {
    emit('changeTitle', 'vue3');
}
const changeArr = () => {
    emit('changeArr', [4, 5, 6]);
}


// 3.子组件暴露
const testCount = ref(1);
const addCount = () => {
    testCount.value++;
}
defineExpose({
    testCount,
    addCount
})


</script>

<style scoped></style>
<template>
    <div>
        <h2>TestA</h2>
        <h2>count:{{ count }}</h2>
        <button @click="count++">+</button>
    </div>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, ref } from 'vue';

let count = ref(0);

onActivated(() => {
    console.log('TestA onActivated');
})

onDeactivated(() => {
    console.log('TestA onDeactivated');
})

</script>

<style scoped></style>
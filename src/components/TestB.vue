<template>
    <div>
        <h2>TestB</h2>
        <input type="text" v-model="inputText">
        <p>{{ inputText }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onActivated, onDeactivated } from 'vue';

let inputText = ref('');

onActivated(() => {
    console.log('TestB onActivated');
})

onDeactivated(() => {
    console.log('TestB onDeactivated');
})

</script>

<style scoped></style>
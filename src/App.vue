<template>
  <div>
    <Son></Son>
  </div>
</template>

<script setup lang="ts">
import { provide, readonly, ref } from 'vue';
import Son from './components/Son.vue';

let color = ref('pink');
provide('color', readonly(color));

</script>

<style scoped></style>
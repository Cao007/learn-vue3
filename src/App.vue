<template>
  <div>
    <Son></Son>
  </div>
</template>

<script setup lang="ts">
import Son from './components/Son.vue';

let color = ref('pink');
provide('color', color);

</script>

<style scoped></style>
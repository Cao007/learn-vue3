<template>
  <div>
    <button @click="activeComponent = TestA">TestA</button>
    <button @click="activeComponent = TestB">TestB</button>

    <!-- 
      缓存动态组件
     -->
    <KeepAlive>
      <component :is="activeComponent"></component>
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import TestA from './components/TestA.vue';
import TestB from './components/TestB.vue';

let activeComponent = shallowRef(TestA)

</script>

<style scoped></style>
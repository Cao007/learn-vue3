<template>
  <div class="app-container">
    <div class="box1">
      <Teleport to="body" :disabled="disabled">
        <div class="box2"></div>
      </Teleport>
    </div>
    <button @click="handleClick">传送</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let disabled = ref(true)

const handleClick = () => {
  disabled.value = !disabled.value
}

</script>

<style scoped lang="less">
body {
  position: relative;
}

.box1 {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: red;
}

.box2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>
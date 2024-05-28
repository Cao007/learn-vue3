<template>
  <div>
    <button @click="toggleDark()">切换主题</button>
    <p>当前主题:{{ isDark ? '深色' : '浅色' }}</p>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

// 响应式深色主题偏好
// vueuse-color-scheme本地存储到localStorage
let isDark = useDark()
let toggleDark = useToggle(isDark)

</script>

<style scoped lang="scss"></style>
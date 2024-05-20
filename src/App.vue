<template>
  <div>
    <Son>
      <!-- 具名插槽 -->
      <template #header>
        <h1>header</h1>
      </template>

      <!-- 匿名插槽 -->
      <template #default>
        <h2>default</h2>
      </template>

      <!-- 作用域插槽 -->
      <template #footer="{ userArr }">
        <div class="users" v-for="user in userArr" :key="user.name">
          <ul>
            <li>
              <h3>{{ user.name }}</h3>
            </li>
            <li>{{ user.age }}</li>
            <li>{{ user.sex }}</li>
          </ul>
        </div>
      </template>

      <!-- 动态插槽 -->
      <template #[dynamicSlotName]>
        <h1>动态插槽</h1>
      </template>
    </Son>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Son from './components/Son.vue';
const dynamicSlotName = ref('header');
</script>

<style scoped></style>
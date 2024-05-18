<template>
  <div>
    <Tree :treeData="treeData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface Tree {
  name: string,
  checked?: boolean,
  children?: Tree[]
}

const treeData = ref<Tree[]>([
  {
    name: '1',
    checked: false,
    children: [
      {
        name: '1-1',
        checked: false
      },
    ]
  },
  {
    name: '2',
    checked: false,
    children: [
      {
        name: '2-1',
        checked: false
      },
      {
        name: '2-2',
        checked: false
      }
    ]
  },
  {
    name: '3',
    checked: false,
    children: [
      {
        name: '3-1',
        checked: false,
        children: [
          {
            name: '3-1-1',
            checked: false
          },
          {
            name: '3-1-2',
            checked: false
          }
        ]
      }
    ]
  }
]);

</script>

<style scoped></style>

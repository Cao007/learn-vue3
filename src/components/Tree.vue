<template>
    <div>
        <ul>
            <li v-for="item in treeData" :key="item.name" @click.stop="handleClick(item,$event)">
                <input type="checkbox" v-model="item.checked" />
                <span>{{ item.name }}</span>
                <Tree v-if="item.children" :treeData="item.children" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface Tree {
    name: string,
    checked?: boolean,
    children?: Tree[]
}
const props = defineProps<{
    treeData?: Tree[]
}>()

const handleClick = (item: Tree, event:any) => {
    console.log(item);
    console.log(event.target);
}
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

ul>li {
    margin-left: 10px;
}
</style>
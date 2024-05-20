<template>
    <div>
        <header>
            <!-- 
                具名插槽：指定插槽名为header
             -->
            <slot name="header">header默认</slot>
        </header>
        <main>
            <!-- 
                匿名插槽：name=default为匿名插槽，默认可以省略
             -->
            <slot name="default">default默认</slot>
        </main>
        <footer>
            <!-- 
                作用域插槽：子组件向父组件传递数据
             -->
            <slot name="footer" :userArr="users">footer默认</slot>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const users = [
    {
        name: '张三',
        age: 18,
        sex: '男'
    },
    {
        name: '李四',
        age: 19,
        sex: '女'
    },
    {
        name: '王五',
        age: 20,
        sex: '男'
    }
]

</script>

<style scoped></style>
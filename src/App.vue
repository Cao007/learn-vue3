<template>
    <el-input class="ipt" v-model="input" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style scoped lang="less">
.ipt {
    width: 300px;
    height: 50px;

    :deep(.el-input__inner) {
        background-color: pink;
    }
}
</style>
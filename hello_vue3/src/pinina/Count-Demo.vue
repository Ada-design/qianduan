<template>
    <div class="count">
        <h2>当前求和为{{ sum }}</h2>
        <!-- v-model.number 绑定的是数字，不是字符串 -->
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts" name="Count-Demo">
import { ref } from 'vue'
// 当前求和
let sum = ref(0)

// 用户选择的数字
let n = ref(1)

// 方法
function add() {
    sum.value += n.value
}

function minus() {
    sum.value -= n.value
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>
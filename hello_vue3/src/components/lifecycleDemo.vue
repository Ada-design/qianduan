<template>
    <div class="lifecycle">
        <h2>求和为{{ sum }}</h2>
        <button @click="add">sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Lifecycle-Demo">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

let sum = ref(0)

function add() {
    sum.value++
}
// 生命周期函数

// vue2中的beforeCreate、created在vue3中使用了setup代替
// 创建
console.log(sum.value)

// 挂载前
onBeforeMount(() => {
    console.log('挂载前')
})

// 挂载完毕
onMounted(() => {
    console.log('挂载完毕')
})

// 更新前
onBeforeUpdate(() => {
    console.log('更新前')
})

// 更新完毕
onUpdated(() => {
    console.log('更新完毕')
})

// 卸载前
onBeforeUnmount(() => {
    console.log('卸载前')
})

// 卸载完毕
onUnmounted(() => {
    console.log('卸载完毕')
})
</script>

<style scoped>
.lifecycle {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    background-color: rgb(0, 255, 162);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    margin-right: 10px;
}
</style>
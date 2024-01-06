<template>
    <div class="person">
        <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发送请求</h2>
        <h2>当前水温：{{ temp }}度</h2>
        <h2>水位：{{ height }}cm</h2>
        <button @click="changeTemp()">改变水温</button>
        <button @click="changeHeight()">改变水位</button>
    </div>
</template>

<script lang="ts" setup name="watchEffect-Demo">
import { ref, watchEffect } from 'vue'

let temp = ref(10)
let height = ref(0)

// 方法
function changeTemp() {
    temp.value += 10
}

function changeHeight() {
    height.value += 10
}

// 监视--watch实现
// watch([temp, height], (value) => {
//     console.log(value)
//     // 从value中获取最新的水温(newTemp)、最新的水位(newHeight)
//     let [newTemp, newHeight] = value
//     if (newTemp >= 60 || newHeight >= 80) {
//         console.log('服务器发请求')
//     }
// })

// 监视--watchEffect实现
watchEffect(() => {
    console.log('@')
    if (temp.value >= 60 || height.value >= 80) {
        console.log('服务器发请求')
    }
})
</script>

<style scoped>
.person {
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
<template>
    <div class="person">
        <h1>中国</h1>
        <!-- DOM标签中使用ref获取元素 -->
        <h2 ref="title">北京</h2>
        <h3>尚硅谷</h3>
        <button @click="showLog">点我输出h2这个元素</button>
    </div>
</template>


<script lang="ts" setup name="ref-Test">
// defineExpose指定组件中要暴露的属性
import { ref, defineExpose } from 'vue'
let title = ref()
let a = ref(0)

// 创建一个title，用于存储ref标记的内容
function showLog() {
    console.log(title.value)
}

defineExpose({ title, a })
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
<template>
    <div class="person">
        <h1>情况一：监视【ref定义的基本类型数据】</h1>
        <h2>当前求和为:{{ sum }}</h2>
        <button @click="changeSum">点我加sum加1</button>
    </div>
</template>

<script lang="ts" setup name="Watch-Demo">
// 引入watch
import { ref, watch } from 'vue'

// 数据
let sum = ref(0)

// 方法
function changeSum() {
    sum.value++
}

// 监视(下列代码会一直执行，监视sum)
// watch(sum, (newValue, oldValue) => {
//     console.log('sum变化了', newValue, oldValue)
// })

// 如何停止监视sum,使用如下代码
const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log('sum变化了', newValue, oldValue)
    if (newValue > 10) {
        // 最新值大于10的时候，停止监视
        stopWatch()
    }
});

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
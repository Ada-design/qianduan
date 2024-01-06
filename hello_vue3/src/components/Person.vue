<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址:{{ address }}</h2>
        <button @click="changeName">修改名称</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeAddress">修改地址</button>
    </div>
</template>
<script lang="ts" setup name="Person">
import { ref } from 'vue'
console.log(ref)
// 数据
// ref()包裹的，在ts中都要用.value
let name = ref('张三')
let age = ref(18)
let address = ref('北京昌平市区宏福苑.宏福科技园')

// 方法
function changeName() {
    name.value = '李四'
}

function changeAge() {
    age.value += 1
}

function changeAddress() {
    address.value = '北京昌平市区'
}


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
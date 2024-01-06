<template>
    <div class="person">
        <h1>情况三：监视【reactive定义的【响应式对象】】</h1>
        <hr>
        <h2></h2>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup name="Watch-Demo2">
// 引入watch
import { reactive, watch } from 'vue'

// 数据
let person = reactive({
    name: '张三',
    age: 18
})

// 方法
function changeName() {
    person.name += 1
}

function changeAge() {
    person.age++
}

function changePerson() {
    // reactive不能整体修改
    // person = reactive({
    //     name: '李四',
    //     age: 90
    // })
    Object.assign(person, {
        name: '王五',
        age: 100
    })
}

watch(person, (newVal, oldVal) => {
    console.log('newVal', newVal)
    console.log('oldVal', oldVal)
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
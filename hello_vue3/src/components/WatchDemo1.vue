<template>
    <div class="person">
        <h1>情况二：监视【ref定义的【对象】类型数据】</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup name="Watch-Demo1">
// 引入watch
import { ref, watch } from 'vue'

// 数据
let person = ref({
    name: '张三',
    age: 18
})

// 方法
function changeName() {
    person.value.name += 1
}

function changeAge() {
    person.value.age++
}

function changePerson() {
    person.value = {
        name: '李四',
        age: 90
    }
}

/**
 * 监视,情况一：监视[ref]定义的[对象类型]数据，监视的是对象的地址值
 * 若想监视对象内部属性的变化，需要手动开启深度监视
 * watch的第一个参数是：被监视的数据，第二个参数是：监视的回调函数，第三个参数是：配置对象(deep,immediate等等)
 */

watch(person, (newVal, oldVal) => {
    console.log('person变化了')
    console.log(newVal)
    console.log(oldVal)
}, {
    // 开始深度监视
    deep: true,
    // 立即执行，开启监视
    immediate: true
})
// 实际开发中这样写,value表示的是新的值
// watch(person, (value) => {
//     console.log('person变化了')
//     console.log(value)
// })
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
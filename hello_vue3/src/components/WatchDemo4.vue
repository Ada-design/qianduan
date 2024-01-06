<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改整个车</button>
    </div>
</template>

<script lang="ts" setup name="Watch-Demo4">
// 引入watch
import { reactive, watch } from 'vue'

// getter函数 返回一个值的函数

// 数据
let person = reactive({
    name: '张三',
    age: 18,
    car: {
        c1: '奔驰',
        c2: '宝马'
    }
})

// 方法
function changeName() {
    person.name = '李四'
}

function changeAge() {
    person.age++

}

function changeC1() {
    person.car.c1 = '奥迪'
}

function changeC2() {
    person.car.c2 = '大众'
}

function changeCar() {
    person.car = {
        c1: '雅迪',
        c2: '爱玛'
    }
}

/**
 * () => { return person.name } 匿名的箭头函数返回person.name的值
 * 下列方式监视person.name的值变化
 */
watch(() => { return person.name }, (newVal, oldVal) => {
    console.log('newVal', newVal)
    console.log('oldVal', oldVal)
})

// 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数形式
watch(() => { return person.age }, (newVal, oldVal) => {
    console.log('newVal', newVal)
    console.log('oldVal', oldVal)
})
// 下列方式监视person.age的值变化
watch(() => { return person.age }, (newVal, oldVal) => {
    console.log('newVal', newVal)
    console.log('oldVal', oldVal)
})

// 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，推荐写函数
watch(() => person.car, (newVal, oldVal) => {
    console.log('newVal', newVal)
    console.log('oldVal', oldVal)
},{
    // 监听person.car的变化，deep为true，表示监听person.car的属性变化
    deep: true
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
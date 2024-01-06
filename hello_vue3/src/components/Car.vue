<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="car">
        <p>一辆{{ Car.brand }}车的价格是 {{ Car.price }}元</p>
        <button @click="changePrice">修改汽车的价格</button>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="item in games" :key="item.id">{{ item.name }}</li>
        </ul>
        <button @click="changeFirstName">修改第一个游戏的名字</button>
        <hr>
        <p>{{ a.b.c }}</p>
        <button @click="test">测试</button>
    </div>
</template>  


<script lang="ts" setup name="Car">
import {reactive} from 'vue'

// 数据
let Car = reactive({
    brand: '奔驰',
    price: 100,
})

let games =reactive([
    {id:1,name:'吃鸡'},
    {id:2,name:'打地鼠'},
    {id:3,name:'打篮球'}
])
let a=reactive({
    b:{
        c:'hello'
    }
})



// 方法
function changePrice() {
    Car.price +=1
    console.log(Car)
}

function changeFirstName(){
    games[0].name = '王者荣耀'
}

//reactive可以深层次的响应式对象的
function test(){
    a.b.c = 'world'
}
</script>

<style scoped>
.car {
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

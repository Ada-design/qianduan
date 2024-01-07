<template>
    <div class="ts">
        <h2>{{ person.name }}</h2>
        <ul>
            <li v-for="item in personList" :key="item.id">
                <p>id:{{ item.id }}</p>
                <p>name:{{ item.name }}</p>
                <p>age:{{ item.age }}</p>
            </li>
        </ul>
        <ol>
            <li v-for="item in personList2" :key="item.id">
                <p>id:{{ item.id }}</p>
                <p>name:{{ item.name }}</p>
                <p>age:{{ item.age }}</p>
            </li>
        </ol>
    </div>
</template>

<script lang="ts" setup name="Ts-Demo">
// @ 表示从src目录开始搜索
// 导入类型PersonInter
import { type PersonInter, type Persons } from '@/types'

// 声明变量为PersonInter类型，并且赋值
let person: PersonInter = { id: '1', name: '张三', age: 60 }

// 声明一个数组，数组里面每一项都是PersonInter类型
let personList: Array<PersonInter> = [
    { id: '1', name: '张三', age: 60 },
    { id: '2', name: '李四', age: 80 },
    { id: '3', name: '王五', age: 90 },
]

let personList2: Persons = [
    { id: '1', name: '张三', age: 60 },
    { id: '2', name: '李四', age: 80 },
    { id: '3', name: '王五', age: 90 },
]
</script>

<style scoped>
.ts {
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
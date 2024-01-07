<template>
    <div class="propsDemo">
        <h2>{{ a }}</h2>
        <ul>
            <li v-for="item in list" :key="item.id">
                <p>id:{{ item.id }}</p>
                <p>name:{{ item.name }}</p>
                <p>age:{{ item.age }}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="props-Demo">
// withDefaults默认值
import { defineProps, withDefaults } from 'vue';
import { type Persons } from '@/types'
// 只接收list属性
// defineProps(['list'])

// 接收a和list两个属性，同时保存起来
// let x = defineProps(['a', 'list'])
// console.log(x)
// 接收属性a的值
// console.warn(x.a)
// console.log(x.list)


// 接收list+限制类型,a+限制类型
// defineProps<{ list: Persons, a: string }>()

// 接收list+限制类型+限制必要性+指定默认值
// ?表示限制必要性，
withDefaults(defineProps<{ list?: Persons, a: string }>(), {
    // list没有值的时候的默认值
    list: () => [
        { id: '1', name: '张三', age: 60 }
    ]
})

</script>

<style scoped>
.propsDemo {
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

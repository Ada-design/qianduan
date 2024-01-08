import { ref, onMounted } from 'vue'

export default function () {
    // 数据
    let sum = ref(0)

    // 方法
    function add() {
        sum.value += 1
    }

    // 生命周期钩子
    onMounted(() => {
        add()
    })
    // 向外部提供东西
    return {
        sum,
        add
    }
}
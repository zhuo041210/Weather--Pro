import { defineStore } from "pinia"
import { ref , computed } from "vue"

// 创建了一个小型仓库，名为testStore，即为test模块的小仓库

// 使用defineStore，第一个参数即为这个小仓库的唯一标识名；第二个参数即为一个函数，函数体内部就是正常的组合式API写法
export default defineStore('test',()=>{
    const testNum = ref(0)
    const name = ref('陈卓')

    const doubleNum = computed(()=>{
        return testNum.value * 2
    })
    const sayName = computed(()=>{
        return `你好，我的名字是${name.value}!`
    })
    function increment(){
        testNum.value++
    }
    function decrement(){
        testNum.value--
    }
    // vue3中没有setup的语法糖，即直接按需返回
    return {
        testNum,name,
        doubleNum,sayName,
        increment,decrement
    }
})
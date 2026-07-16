<script setup lang="ts">
  import  useTestStore  from '@/stores/testStore.ts'
  import { storeToRefs } from 'pinia'

  const testStore = useTestStore()
  // state和computed的导入 需要storeToRefs保持响应式
  const { testNum,name,doubleNum,sayName } = storeToRefs(testStore)
  // 函数的导入 不需要响应式 直接导入即可
  const { increment,decrement } = testStore

</script>

<template>
  <h2>仓库的数字是:{{ testNum }},其放大2倍后的数值为:{{ doubleNum }}</h2>
  <h2>仓库的名字是:{{ name }},自我介绍为:{{ sayName }}</h2>
  <button @click="increment">点我给数字加1</button>
  <button @click="decrement">点我给数字减1</button>
</template>

<style scoped></style>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Test from './Test'
import { useStore } from '@/store'
import { getLoginInfo } from '@/api/common'
import { isDark, toggleDark } from '@/composable'

const store = useStore()
defineProps<{ msg: string }>()

const title = ref<HTMLHeadElement | null>(null)
onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res, 'res')
  })
})
</script>

<template>
  <h1 ref="title">
    {{ msg }}
  </h1>
  <h2 class="testH2">
    {{ store.counter }}
  </h2>
  <Test :data="'xxxxxxxxxx'" />
  <el-button @click="toggleDark()">
    切换 当前{{ isDark ? 'Dark' : 'Light' }}
  </el-button>
</template>

<style lang="scss" scoped>
.testH2 {
  color: $color;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
}
</style>

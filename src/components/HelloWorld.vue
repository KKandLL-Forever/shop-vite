<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Test from './Test'
import { useStore } from '@/store'

const store = useStore()
defineProps<{ msg: string }>()

const title = ref<HTMLHeadElement | null>(null)
onMounted(() => {})
</script>

<template>
  <h1 ref="title">
    {{ msg }}
  </h1>
  <h2 class="testH2">
    {{ store.counter }}
  </h2>
  <Test :data="'xxxxxxxxxx'" />
</template>

<style lang="scss" scoped>
.testH2 {
  color: $color;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

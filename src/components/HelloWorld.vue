<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Test from './Test'

defineProps<{ msg: string }>()

const title = ref<HTMLHeadElement | null>(null)
onMounted(() => {})
</script>

<template>
  <h1 ref="title">
    {{ msg }}
  </h1>
  <Test :data="'xxxxxxxxxx'" />
</template>

<style scoped>
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

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input2 = ref('')
</script>

<template>
  <el-input
    v-model="input2"
    class="w-50 m-2"
    placeholder="Type something"
    :prefix-icon="Search"
  />
</template>

<style scoped>

</style>

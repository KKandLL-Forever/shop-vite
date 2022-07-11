<script setup lang="ts">
import { Fold } from '@element-plus/icons-vue'
const xxx = () => { console.log(123) }
</script>

<template>
  <el-icon @click="xxx">
    <Fold />
  </el-icon>
</template>

<style scoped>

</style>

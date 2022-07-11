<script setup lang="ts">
import { useStore } from '@/store'
import { Fold } from '@element-plus/icons-vue'

const store = useStore()
const switchTo = () => {
  store.changeCollapse()
}
</script>

<template>
  <el-icon @click="switchTo">
    <Fold />
  </el-icon>
</template>

<style lang="scss" scoped>
.el-icon {
  cursor: pointer;
}
</style>

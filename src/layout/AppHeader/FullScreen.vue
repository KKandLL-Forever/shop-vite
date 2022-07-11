<script setup lang="ts">
import { FullScreen } from '@element-plus/icons-vue'

const toFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<template>
  <el-icon @click="toFullScreen">
    <FullScreen />
  </el-icon>
</template>

<style scoped>

</style>

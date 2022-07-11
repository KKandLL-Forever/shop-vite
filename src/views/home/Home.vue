<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { value, toggle } from '@/composable'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import eN from 'element-plus/lib/locale/lang/en'
</script>

<template>
  <el-config-provider :locale="value ? zhCn: eN">
    <HelloWorld msg="Hello Vue 3" />
  </el-config-provider>
  <el-button @click="toggle()">
    语言
  </el-button>
</template>

<style scoped>

</style>

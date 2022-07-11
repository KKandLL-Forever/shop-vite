<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { value, toggle } from '@/composable'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import eN from 'element-plus/lib/locale/lang/en'

</script>

<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <el-config-provider :locale="value ? zhCn: eN">
    <HelloWorld msg="Hello Vue 3" />
  </el-config-provider>
  <el-button @click="toggle()">
    语言
  </el-button>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>

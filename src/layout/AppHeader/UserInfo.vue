<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'

const handleLogo = () => { console.log('logo') }

</script>

<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogo">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>

</style>

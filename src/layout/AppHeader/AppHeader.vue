<script setup lang="ts">
import Breadcrumb from './Breadcrumb.vue'
import ToggleSideBar from './ToggleSideBar.vue'
import MenuSearch from './MenuSearch.vue'
import FullScreen from './FullScreen.vue'
import Notification from './Notification.vue'
import UserInfo from './UserInfo.vue'

</script>

<template>
  <el-space size="large">
    <ToggleSideBar />
    <Breadcrumb />
  </el-space>
  <el-space size="large">
    <MenuSearch />
    <FullScreen />
    <Notification />
    <UserInfo />
  </el-space>
</template>

<style scoped>

</style>

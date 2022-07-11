<script setup lang="ts">
import AppMenu from './AppMenu/AppMenu.vue'
import AppHeader from './AppHeader/AppHeader.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppMenu />
      </el-aside>
      <el-container>
        <el-header>
          <AppHeader />
        </el-header>
        <el-main>
          <!--children routes-->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}

.el-header {
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  width: auto;
  background-color: #304156;
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}
</style>

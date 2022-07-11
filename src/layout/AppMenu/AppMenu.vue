<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import { ref } from 'vue'

const isCollapse = ref(false)

</script>

<template>
  <el-menu
    class="el-menu-vertical-demo"
    active-text-color="#ffd04b"
    background-color="#304057"
    text-color="#fff"
    :collapse="isCollapse"
    router
    unique-opened
  >
    <el-menu-item index="/">
      <template #title>
        <el-icon><location /></el-icon>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-sub-menu index="product">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/productList">
        <el-icon><icon-menu /></el-icon>
        <span>商品列表</span>
      </el-menu-item>
      <el-menu-item index="/product/productClassify">
        <el-icon><icon-menu /></el-icon>
        <span>商品分类</span>
      </el-menu-item>
      <el-menu-item index="/product/productAttr">
        <el-icon><icon-menu /></el-icon>
        <span>商品规格</span>
      </el-menu-item>
      <el-menu-item index="/product/productReply">
        <el-icon><icon-menu /></el-icon>
        <span>商品评论</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="order">
      <template #title>
        <el-icon><document /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/orderList">
        <el-icon><icon-menu /></el-icon>
        <span>订单列表</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item>
      <template #title>
        <el-icon><setting /></el-icon>
        <span>媒体</span>
      </template>
    </el-menu-item>
    <el-sub-menu index="permission">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permissions/role">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          角色
        </template>
      </el-menu-item>
      <el-menu-item index="/permissions/admin">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          管理员
        </template>
      </el-menu-item>
      <el-menu-item index="/permissions/rule">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          权限规则
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

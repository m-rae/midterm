<template>
  <div id="sideNavigation">
    <el-menu class="side-nav-menu" :router="true" :default-active="activeLink">
      <div class="logo">
        <span class="Snowcoop">Snowcoop</span>
      </div>
      <el-menu-item index="/dashboard" class="active">
        <span class="Dashboard">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="/list">
        <span class="Address-List">List</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./side-navigation.component.js"></script>
<style src="./side-navigation.component.css" scoped></style>
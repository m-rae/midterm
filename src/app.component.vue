<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" v-if="isLogIn"></el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script src="./app.component.js"></script>
<style src="./app.component.css"></style>

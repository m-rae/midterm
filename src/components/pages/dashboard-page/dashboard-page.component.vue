<template>
  <div id="dashboardPage">
    <div class="list-wrapper">
      <p>Hi {{ $store.state.user.firstName }}, welcome to snowcoop.</p>
      <div class="list-view-wrapper">
         <el-card class="map-view-card">
          <map-view 
            v-if="addressList"
            v-bind:showList="false"
            v-bind:addressList="addressList">
          </map-view>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script src="./dashboard-page.component.js"></script>
<style src="./dashboard-page.component.css"></style>

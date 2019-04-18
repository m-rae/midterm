<template>
  <div id="listPage">
    <div class="list-wrapper">
      <div class="list-header">
          <span class="list-title"> {{ `You have ${addressList.length} addresses to complete` }}</span>
          <div class="list-header-button-wrapper">
            <button @click.prevent="showForm">Add</button>
          </div>
      </div>
      <div class="list-view wrapper">
        <el-card class="box-card">
          <map-view 
            v-if="addressList"
            v-bind:showList="true"
            v-bind:addressList="addressList">
          </map-view>
        </el-card>
      </div>
    </div>
  <form-add-address ref="formAddress"></form-add-address>
  </div>
</template>
<script src="./list-page.component.js"></script>
<style src="./list-page.component.css"></style>

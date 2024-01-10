<script setup lang="ts">
  import Left from '@/views/left/index.vue'
  import Canvas from '@/views/canvas/index.vue'
  import Right from '@/views/right/index.vue'
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

</script>

<template>
  <div id="container">
    <el-config-provider :locale="zhCn">
      <Left />
      <Canvas />
      <Right />
    </el-config-provider>
  </div>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  #container {
    display: flex;
    align-items: flex-start;
    background-color: rgb(245, 245, 245);
    height: 100vh;
  }
</style>

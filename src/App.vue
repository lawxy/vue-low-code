<script setup lang="ts">
  import Left from '@/views/left/index.vue'
  import Canvas from '@/views/canvas/index.vue'
  import Right from '@/views/right/index.vue'
  import zhCN from 'ant-design-vue/es/locale/zh_CN';

</script>

<template>
  <div id="container">
    <a-config-provider :locale="zhCN">
      <Left />
      <Canvas />
      <Right />
    </a-config-provider>
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

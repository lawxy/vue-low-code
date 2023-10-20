<script setup lang="ts">
  import Left from '@/components/left/index.vue'
  import Canvas from '@/components/canvas/index.vue'
  import Right from '@/components/right/index.vue'
</script>

<template>
  <div id="container">
    <Left />
    <Canvas />
    <Right />
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

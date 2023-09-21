<script setup lang="ts">
  import Left from '@/components/left/index.vue'
  import Right from '@/components/right/index.vue'
</script>

<template>
  <div class="flex">
    <Left />
    <Right />
  </div>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .flex {
    display: flex;
    height: 100vh;
  }
</style>

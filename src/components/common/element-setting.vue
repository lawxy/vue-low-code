<template>
  <a-form-item label="标签名称">
    <a-input  v-model:value="selectedElement!.elementName" ></a-input>
  </a-form-item>
  <a-form-item label="标签对齐方式">
    <a-select>

    </a-select>
  </a-form-item>
  <a-form-item label="元素栅格">
    <a-slider :min="1" :max="24" v-model:value="selectedElement!.gridSpan"></a-slider>
  </a-form-item>
  <slot name="other"></slot>
</template>
<script setup lang="ts">
  import { useElementsStore } from '@/stores/elements'
  import { storeToRefs } from 'pinia'

  const elementsStore = useElementsStore();
  
  const { selectedElement } = storeToRefs(elementsStore);

</script>
<style scoped>
</style>
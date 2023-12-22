<template>
  <a-form-item label="元素名称">
    <a-input  v-model:value="selectedElement!.elementName" ></a-input>
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
  // const { setSelectedProp } = elementsStore;
  const { selectedElement } = storeToRefs(elementsStore);

  // const handleChange = (e: any) => {
  //   setSelectedProp('elementName', e.target.value)
  // }
</script>
<style scoped>
</style>
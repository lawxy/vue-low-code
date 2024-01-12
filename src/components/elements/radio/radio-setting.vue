<template>
  <ElementSetting>
    <template #other>
      <OptionSetting :element="selectedElement"/>   
    </template>
  </ElementSetting>
</template>


<script setup lang="ts">
  import ElementSetting from '@/components/common/element-setting'
  import OptionSetting from '@/components/common/option-setting/index.vue'
  import { useElementsStore } from '@/stores/elements'
  import { storeToRefs } from 'pinia'
  const elementsStore = useElementsStore();
  const { selectedElement } = storeToRefs(elementsStore);
</script>

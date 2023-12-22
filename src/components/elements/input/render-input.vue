<template>
  <div>
    <a-input v-if="element.textType === 'single'"></a-input>
    <a-textarea 
      v-else 
      :key="key"
      :auto-size="element.autoSize ? true : { minRows: element.minRows, maxRows: element.maxRows }" />
  </div>
</template>

<script setup lang="ts">
import type { IBaseElement } from '@/types'
import { computed } from 'vue';

const { element } = defineProps<{
  element: IBaseElement;
}>();

const key = computed(() => Number(element.autoSize) + Number(element.maxRows) * 1000 + Number(element.minRows)*10)

// watch(element, () => {
//   console.log('bianle ')
// })
</script>

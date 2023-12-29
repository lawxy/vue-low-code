<template>
  <a-input-number 
    :style="{width: '100%'}"
    :min="element.minVal"
    :max="element.maxVal"
    :precision="precision"
  />
</template>

<script setup lang="ts">
import type { IBaseElement } from '@/types'
import { computed } from 'vue';

const { element } = defineProps<{
  element: IBaseElement;
}>();

const precision = computed(() => {
    switch(element?.valueType) {
      case 'int': return 0;
      case 'one_decimal': return 1;
      default: return 2;
    }
  })

</script>

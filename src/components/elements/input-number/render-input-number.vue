<template>
  <div>
    <a-input-number :style="{width: '100%'}"/>
  </div>
</template>

<script setup lang="ts">
import type { IBaseElement } from '@/types'

const { element } = defineProps<{
  element: IBaseElement;
}>();

</script>

<template>
  <a-radio />
</template>

<script setup lang="ts">
import type { IBaseElement } from '@/types'

const { element } = defineProps<{
  element: IBaseElement;
}>();

</script>

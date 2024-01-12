<template>
  <el-radio-group >
    <el-radio 
      v-for="item in element.valueOptions"
      :label="item.value"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script setup lang="ts">
import type { IBaseElement } from '@/types'

const { element } = defineProps<{
  element: IBaseElement;
}>();

</script>

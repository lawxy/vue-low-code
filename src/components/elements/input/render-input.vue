<template>
  <el-input v-if="element.textType === 'single'" v-model="value"></el-input>
  <el-input
    v-else 
    :key="key"
    type='textarea'
    :autosize="element.autoSize ? true : { minRows: element.minRows, maxRows: element.maxRows }" 
    v-model="value"
    />
</template>

<script setup lang="ts">
import type { IBaseElement } from '@/types'
import { computed, ref } from 'vue';

const { element } = defineProps<{
  element: IBaseElement;
}>();

const value = ref('')

const key = computed(() => Number(element.autoSize) + Number(element.maxRows) * 1000 + Number(element.minRows)*10)

// watch(element, () => {
//   console.log('bianle ')
// })
</script>

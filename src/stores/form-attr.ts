import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import type { TMenuBaseItem } from '@/types';

export const useFormAttrStore = defineStore('formAttrStore', () => {
  const rowGap = ref<number>(8);
  const colGap = ref<number>(8);

  const setRowGap = (n: number) => {
    rowGap.value = n
  }
  
  const setColGap = (n: number) => {
    colGap.value = n
  }

  return { 
    rowGap, 
    colGap,
    setRowGap,
    setColGap
  }
})

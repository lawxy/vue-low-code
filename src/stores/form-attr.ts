import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import type { TMenuBaseItem } from '@/types';

export const useFormAttrStore = defineStore('formAttrStore', () => {
  const verticalGap = ref<number>(8);
  const horizontalGap = ref<number>(8);

  const setRowGap = (n: number) => {
    verticalGap.value = n
  }
  
  const setColGap = (n: number) => {
    horizontalGap.value = n
  }

  return { 
    verticalGap, 
    horizontalGap,
    setRowGap,
    setColGap
  }
})

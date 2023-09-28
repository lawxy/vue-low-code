import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IBaseElement } from '@/types'

export const useElementsStore = defineStore('counter', () => {
  // 显示的组件元素
  const formElements = ref<IBaseElement[]>([])
  
  const setFormElements = (els: IBaseElement[]) => {
    formElements.value = els;
  }

  const clearAllElements = () => {
    formElements.value = [];
  }

  return { formElements, setFormElements, clearAllElements }
})

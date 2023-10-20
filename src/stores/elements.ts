import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import type { IBaseElement } from '@/types'

export const useElementsStore = defineStore('elementsStore', () => {
  // 显示的表单元素
  const formElements = ref<IBaseElement[]>([]);

  const setFormElements = (els: IBaseElement[]) => {
    formElements.value = els;
  }

  const clearAllElements = () => {
    formElements.value = [];
  }
  /**
   * 当前选中的元素
  */
  const selectedElement = ref<IBaseElement>({});

  const setSelectedElement = (el: IBaseElement) => {
    selectedElement.value = el
  }

  return { 
    formElements, 
    setFormElements, 
    clearAllElements,
    selectedElement,
    setSelectedElement
  }
})

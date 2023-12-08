import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IBaseElement } from '@/types'

export const useElementsStore = defineStore('elementsStore', () => {
  // 显示的表单元素
  // mock{elementName: '1', type: 'input', id: '1'}, {elementName: '2', type: 'radio', id: '2'}
  const formElements = ref<IBaseElement[]>([]);

  const setFormElements = (els: IBaseElement[]) => {
    formElements.value = els;
  }

  const addFormElement = (el: IBaseElement, i: number) => {
    formElements.value.splice(i, 0, el)
  }

  const moveElement = (fromIndex: number, toIndex: number) => {
    const [el] = formElements.value.splice(fromIndex, 1);
    formElements.value.splice(toIndex, 0, el);
  }

  const clearAllElements = () => {
    formElements.value = [];
  }
  /**
   * 当前选中的元素
  */
  const selectedElement = ref<IBaseElement>();

  const setSelectedElement = (el: IBaseElement) => {
    selectedElement.value = el
  }

 
  /**
   * 设置当前元素属性
  */
  const setSelectedProp = <T extends keyof IBaseElement>(field: T, value: IBaseElement[T]) => {
    selectedElement.value![field] = value;
    const elInForm = formElements.value.find((item) => item.id === selectedElement.value?.id) as IBaseElement
    elInForm[field] = value;
  }

  // watch(formElements, (prev, next) => {
  //   console.log('prev', prev)
  //   console.log('next', next)
  // }, {deep: true})

  return { 
    formElements, 
    setFormElements, 
    clearAllElements,
    selectedElement,
    setSelectedElement,
    addFormElement,
    moveElement,
    setSelectedProp
  }
})

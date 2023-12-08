import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import type { TMenuBaseItem } from '@/types';

const defaultMenuItems: TMenuBaseItem[] = [
  {
    type: 'Input',
    elementName: '文本框'
  },
  {
    type: 'InputNumber',
    elementName: '计数器'
  },
  {
    type: 'Radio',
    elementName: '单选框'
  }
]

export const useMenuItemsStore = defineStore('menuItemsStore', () => {
  // 菜单元素
  const menuItems = ref<TMenuBaseItem[]>(defaultMenuItems);

  const addMenuItem = (el: TMenuBaseItem, i: number) => {
    menuItems.value.splice(i, 0, el)
  }

  return { 
    menuItems, 
    addMenuItem
  }
})

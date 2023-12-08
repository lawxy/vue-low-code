<template>
  <div id="left">
    <div :style="{height: '40px', lineHeight: '40px', padding: '2px', borderBottom: '2px solid rgb(245, 245, 245)', marginBottom: 12}">组件库</div>
    <div ref="el" id="el-group">
      <div @click="handleAdd(item)" class="item" v-for="item in menuItems" :key="item.type" :class="item.type">
          <span class="item-text" >
            {{ item.elementName }}
          </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useDraggable } from 'vue-draggable-plus'
  import { useMenuItemsStore } from '@/stores/menu-items';
  import { storeToRefs } from 'pinia';
  import { useElementsStore } from '@/stores/elements'
  import { idCreator } from "@/utils";
  import type { TMenuBaseItem } from '@/types'
  const el = ref<HTMLDivElement>();

  const { formElements, addFormElement, setSelectedElement } = useElementsStore();

  const { menuItems } = storeToRefs(useMenuItemsStore())

  // @ts-ignore
  useDraggable(el, menuItems, {
    animation: 150,
    sort: false,
    group: { name: 'list', pull: 'clone' },
  })

  const handleAdd = (el: TMenuBaseItem) => {
    const { elementName, type } = el
    const newEl = {id: idCreator(), elementName, type}
    addFormElement(newEl, formElements.length)
    setSelectedElement(newEl)
  }
</script>

<style scoped lang="less">
  #left {
    width: 300px;
    height: 100%;
    background-color: white;
  }
  #el-group {
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 8px;
    padding: 0 8px;
    box-sizing: border-box;
  }
  .ghost {
    border: solid 1px #f4f6fc !important;
    color: #333 !important;
    // width: 200px !important;
  }
  .item {
    width: 138px;
    text-align: center;
    align-items: center;
    background: #f4f6fc;
    border: 1px solid #f4f6fc;
    border-radius: 2px;
    box-sizing: border-box;
    color: #333;
    cursor: move;
    font-size: 12px;
    height: 26px;
    line-height: 26px;
    overflow: hidden;
    padding: 0 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover{
      border: 1px dashed #409eff;
      color: #409eff;
    }
  }
  .item-text {
    pointer-events: none;
  }
</style>
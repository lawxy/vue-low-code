<template>
  <div id="form-wrap">
    <a-row ref="el" :gutter="[rowGap, colGap]">
      <a-col :span="element.gridSpan" v-for="element in formElements" :key="element.id">
          <div class="el-container" :style="element.id === selectedElement?.id ? 'border: 1px solid #3370ff' : ''">
            <div 
              class="mask" 
              v-show="selectedElement?.id !== element.id"
              @click="handleSelected(element)"
            />
            <ElRender :element="element"/>
          </div>
        </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from 'vue-draggable-plus'
import { useElementsStore } from '@/stores/elements'
import { useFormAttrStore } from '@/stores/form-attr';
import { storeToRefs } from 'pinia';
import { generateNewEl } from '@/utils'
import ElRender from './el-render'
import type { IBaseElement } from "@/types";

const el = ref<HTMLDivElement>();

const elementsStore = useElementsStore();
const { setSelectedElement, addFormElement, moveElement } = elementsStore;
const { formElements, selectedElement } = storeToRefs(elementsStore);
const { rowGap, colGap } = storeToRefs(useFormAttrStore())

// @ts-ignore
useDraggable(el, [], {
    animation: 150,
    group: 'list',
    onAdd(e: any) {
      const { newIndex, item } = e;
      // @ts-ignore
      const type = Array.from(item.classList).at(-1);
      const elementName = item.textContent;
      const newEl: IBaseElement = generateNewEl({ elementName, type })
      addFormElement(newEl, newIndex)
      setSelectedElement(newEl)
    },
    onEnd(e: any) {
      const { newIndex, oldIndex } = e;
      moveElement(oldIndex, newIndex)
    }
    
})

const handleSelected = (element: IBaseElement) => {
  setSelectedElement(element)
}
</script>
<style lang="less">
#form-wrap {
  flex: 1;
  margin: 0 10px;
  height: 100%;
  background-color: #fff;
  padding: 8px;
  box-sizing: border-box;
  .ant-row {
    height: 100%;
    align-content: flex-start;
  }
  .el-container {
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: rgb(242,246,255);
    padding: 8px;
    cursor: move;
    position: relative;
    &:hover {
        border: 1px dashed #3370ff;
      }
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    cursor: pointer;
  }
  .el-render-laybout {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .el-render-wrap {
    flex: 1;
  }
}


</style>
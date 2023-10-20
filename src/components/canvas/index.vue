<template>
  <div id="form-wrap">
    <Row ref="el" :gutter="[30, 10]">
      <Col :span="8" v-for="element in formElements" :key="element.id">
          <div class="el-wrap">
            <div 
              class="mask" 
              @click="handleSelected(element)"
            />
            {{ element.name }} 
          </div>
        </Col>
    </Row>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, watchEffect, computed, watch } from "vue";
import { Row, Col } from 'ant-design-vue'
import { useDraggable } from 'vue-draggable-plus'
import { useElementsStore } from '@/stores/elements'
import type { IBaseElement } from "@/types";

const el = ref<HTMLDivElement>();

// @ts-ignore
useDraggable(el, formElements, {
    animation: 150,
    group: 'list',
})

const { formElements, selectedElement, setSelectedElement } = useElementsStore();

const handleSelected = (element: IBaseElement) => {
  setSelectedElement(element)
}
</script>
<style scoped lang="less">
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
}

.el-wrap {
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
  // margin: 'auto';
  // padding: `${vertical / 2}px ${horizontal / 2}px`;
  // margin: `-${vertical / 2}px -${horizontal / 2}px`;
  z-index: 10;
  cursor: pointer;
}




</style>
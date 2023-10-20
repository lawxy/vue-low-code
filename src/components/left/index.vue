<template>
  <div id="left">
    <div :style="{height: '40px', lineHeight: '40px', padding: '2px', borderBottom: '2px solid rgb(245, 245, 245)', marginBottom: 12}">组件库</div>

    <div ref="el" id="el-group">
      <div class="item" v-for="item in dragList" :key="item.id">
          <span class="item-text">
            {{ item.name }}
          </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from "vue";
  import { useDraggable } from 'vue-draggable-plus'
  const el = ref<HTMLDivElement>();

  interface itemType {
    name: string,
    id: number,
    element:string
  }

  const dragList: itemType[] = reactive<itemType[]>([
    { name: "单行文本1", id: 1, element: 'Input' },
    { name: "多行文本1", id: 2, element: 'Textarea' },
    { name: "计数器1", id: 3, element: 'InputNumber' },
    { name: "单选框组1", id: 4, element: 'Radio' },
  ])

  // @ts-ignore
  const draggable = useDraggable(el, dragList, {
    animation: 150,
    sort: false,
    group: { name: 'list', pull: 'clone' },
  })
</script>

<style scoped lang="less">
   #left {
    width: 300px;
    height: 100%;
    background-color: white;
  }
  #el-group {
    width: 100%;
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
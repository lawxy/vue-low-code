<template>
  <div id="left">
    <div :style="{height: '40px', lineHeight: '40px', padding: '2px', borderBottom: '2px solid rgb(245, 245, 245)', marginBottom: 12}">组件库</div>

    <draggable 
      :list="dragList" 
      ghost-class="ghost" 
      :force-fallback="true" 
      :group="{ name: 'list', pull: 'clone' }"
      :sort="false" itemKey="id"
      id="el-group"
      @end="onEnd"
    >
      <template #item="{ element }">
        <div class="item move">
          <label class="move">{{ element.name }}</label>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from "vue";
  import draggable from "vuedraggable";
  const state = reactive({
  //需要拖拽的数据，拖拽后数据的顺序也会变化
  list: [
    { name: "www.itxst.com", id: 0 },
    { name: "www.baidu.com", id: 1 },
    { name: "www.google.com", id: 2 },
    ],
  });

  interface itemType {
    name: string,
    id: number,
    element:string
  }
  const dragList: itemType[] = reactive<itemType[]>([
    { name: "单行文本", id: 1, element: 'Input' },
    { name: "多行文本", id: 2, element: 'Textarea' },
    { name: "计数器", id: 3, element: 'InputNumber' },
    { name: "单选框组", id: 4, element: 'Radio' },
  ])

  const onEnd = (a, b) => {
    console.log("结束拖拽");
    console.log(a)
    console.log(b)
  };
 
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
  }
  .item {
    width: 48%;
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
</style>
<template>
    <draggable 
      :list="dragList" 
      ghost-class="ghost" 
      :force-fallback="true" 
      :group="{ name: 'list', pull: 'clone' }"
      :sort="false" itemKey="id"
    >
      <template #item="{ element }">
        <div class="item move">
          <label class="move">{{ element.name }}</label>
        </div>
      </template>
    </draggable>
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
  const widgetList = reactive<itemType[]>([
 
 ])
 
</script>

<style scoped>
  #left {
    width: 1000px;
  }
</style>
<template>
  <div id="canvas-wrap">
    <el-row :gutter="60">
      <draggable 
        v-model="widgetList" 
        tag="transition-group" 
        v-bind="dragOptions"
       
        group="list" 
        @start="drag = true"
        @end="onEnd"
      >
        <template #item="{ element }">
          <el-col class="item" :span="8">
            {{ element.name }}
          </el-col>
        </template>
      </draggable>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import draggable from "vuedraggable";
const widgetList = reactive([
{ name: "单行文本", id: '1', element: 'Input' },
    { name: "多行文本", id: '2', element: 'Textarea' },
    { name: "计数器", id: '3', element: 'InputNumber' },
    { name: "单选框组", id: '4', element: 'Radio' },
 ])

 const drag = ref(false)
 const dragOptions =  ref({
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost"
  });

//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽");
};

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽");
  console.log(widgetList)
};

</script>
<style scoped>
#canvas-wrap {
  flex: 1;
  margin: 0 10px;
  height: 100%;
  background-color: #fff;
}
.canvas {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.item {
  /* border: solid 1px #eee;
  padding: 6px 10px;
  text-align: left;
  width: 200px;
  height: 50px;
  cursor: move;
  display: inline-block; */
}

.item:hover {
  cursor: move;
}
/* .item + .item {
  margin-top: 10px;
} */
/* .ghost {
  border: solid 1px rgb(19, 41, 239);
} */
.chosenClass {
  background-color: #f1f1f1;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

/* .ghost {
  opacity: 0.1;
  background: #c8ebfb;
} */

.list-group {
  min-height: 20px;
}



</style>
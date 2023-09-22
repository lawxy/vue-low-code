<template>
  <div id="canvas-wrap">
    <draggable 
      :list="widgetList" 
      ghost-class="ghost" 
      itemKey="id" 
      :force-fallback="true" 
      group="list" 
      :fallback-class="true"
      :fallback-on-body="true" 
      class="canvas" 
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
const widgetList = reactive([
 
 ])

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
  border: solid 1px #eee;
  padding: 6px 10px;
  text-align: left;
  width: 200px;
  height: 50px;
}

.item:hover {
  cursor: move;
}
.item + .item {
  margin-top: 10px;
}
.ghost {
  border: solid 1px rgb(19, 41, 239);
}
.chosenClass {
  background-color: #f1f1f1;
}
</style>
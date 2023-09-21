<template>
  <!-- <div class="itxst">
    <div>
      <draggable
        :list="state.list"
        ghost-class="ghost"
        chosen-class="chosenClass"
        animation="300"
        @start="onStart"
        @end="onEnd"
      >
        <template #item="{ element }">
          <div class="item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <div>{{ state.list }}</div>
  </div> -->
  <draggable 
    :list="widgetList" 
    ghost-class="ghost" 
    itemKey="id" 
    :force-fallback="true" 
    group="list" 
    :fallback-class="true"
    :fallback-on-body="true" 
    class="drag-content" 
    @end="onEnd"
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
.itxst {
  width: 600px;
  display: flex;
}
.itxst > div:nth-of-type(1) {
  flex: 1;
}
.itxst > div:nth-of-type(2) {
  width: 270px;
  padding-left: 20px;
}
.item {
  border: solid 1px #eee;
  padding: 6px 10px;
  text-align: left;
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
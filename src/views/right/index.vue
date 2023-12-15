<template>
  <div id="form-setting">
    <a-tabs class="form-setting-tab">
      <a-tab-pane key="1" tab="组件属性">
        <ElAttr />
      </a-tab-pane>
      <a-tab-pane key="2" tab="表单属性">
        <FormAttr />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup lang="ts">
import FormAttr from "./form-attr";
import ElAttr from './el-attr'

</script>
<style lang="less">
#form-setting {
  width: 350px;
  background-color: #fff;
  height: 100%;
  padding: 2px;
  
  .ant-tabs-nav-list{
    width: 100%;
  }
  .ant-tabs-tab {
    width: 50%;
    margin: 0;
    justify-content: center;
  }
}
#el-attr {
  padding: 0 20px;
}

</style>
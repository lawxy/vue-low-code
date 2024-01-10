<template>
  <div id="form-setting">
    <el-tabs class="form-setting-tab">
      <el-tab-pane key="1" label="组件属性">
        <ElAttr />
      </el-tab-pane>
      <el-tab-pane key="2" label="表单属性">
        <FormAttr />
      </el-tab-pane>
    </el-tabs>
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
  .el-tabs__nav {
    width: 100%;
  }
  .el-tabs__item {
    width: 50%;
  }
}
#el-attr {
  padding: 0 20px;
}

</style>
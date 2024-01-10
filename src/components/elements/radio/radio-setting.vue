<template>
  <ElementSetting>
    <template #other>
      <el-form-item class="option-setting" label="选项">
        <el-button size="small" @click="showModal">编辑</el-button>
      </el-form-item>

      <el-dialog 
        v-model="visible"
        title="选项设置"
      >
        <BatchGenerateOptions />
      </el-dialog>
    </template>
  </ElementSetting>
</template>

<script setup lang="ts">
  import ElementSetting from '@/components/common/element-setting'
  import { ref } from 'vue';
  import BatchGenerateOptions from '@/components/common/batch-generate-options.vue';
  const visible = ref(true);

  const showModal = () => visible.value = true;
</script>

<style scoped lang="less">

</style>

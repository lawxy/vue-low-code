<template>
  <ElementSetting>
    <template #other>
      <a-form-item class="option-setting" label="选项">
        <a-button size="small" @click="showModal">编辑</a-button>
      </a-form-item>

      <a-modal 
        v-model:open="visible"
        title="选项设置"
      >
        <BatchGenerateOptions />
      </a-modal>
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
  .option-setting {
    :deep(.ant-col){
      flex-direction: row-reverse;
    }
  }
</style>

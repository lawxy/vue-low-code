<template>
  <div class="option-setting-wrapper">
    <el-form-item class="option-setting" label="选项">
      <el-button size="small" @click="showModal">编辑</el-button>
    </el-form-item>

    <el-table :data="dataSource" >
      <el-table-column prop="label" label="属性" />
      <el-table-column prop="value" label="值" />
    </el-table>
  
    <el-dialog 
      v-model="visible"
      title="选项设置"
      draggable
      class="optionDialog"
    >
      <BatchGenerateOptions ref="childRef" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="onConfirm">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { isEmpty } from '@/utils';
  import BatchGenerateOptions from './batch-generate-options.vue';
  const props = defineProps(['element'])  
  const { element } = props
  const visible = ref(false);
  const dataSource = computed(() => {
    if(element.valueOptions.length > 1) return element.valueOptions
    if(isEmpty(element.valueOptions[0].label) && isEmpty(element.valueOptions[0].value)) return [];
    return element.valueOptions
  })
  const childRef = ref();

  const showModal = () => visible.value = true;

  const onConfirm = () => {
    try {
      childRef.value?.handleConfirm();
      visible.value = false;
    }catch(e) {}
  }
</script>

<style scoped lang="less">
  .option-setting-wrapper {
    :deep(.option-setting) {
      margin-bottom: 0;
    }
    :deep(.optionDialog) {
      .el-dialog__body {
        height: 300px;
        overflow: auto;
      }
    }
    :deep(.option-setting) {
      .el-form-item__content {
        justify-content: flex-end;
      }
    }
   
  }
</style>

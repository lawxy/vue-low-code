<template>
  <ElementSetting>
    <template #other>
      <el-form-item label="文本类型">
        <el-select
          v-model="selectedElement!.textType"
        >
          <el-option v-for="item of options" :value="item.value" :label="item.label"/>
        </el-select>
      </el-form-item>
      <template v-if="selectedElement?.textType === 'multiple'">
        <el-form-item label="自适应行数">
          <el-switch v-model="selectedElement!.autoSize"/>
        </el-form-item>
        <el-form-item v-if="!selectedElement.autoSize" label="最小行数">
          <el-input-number v-model="selectedElement!.minRows" :min="1" :max="selectedElement!.maxRows"/>
        </el-form-item>
        <el-form-item v-if="!selectedElement.autoSize" label="最大行数">
          <el-input-number v-model="selectedElement!.maxRows" :min="selectedElement!.minRows"/>
        </el-form-item>
      </template>
    </template>
  </ElementSetting>
</template>

<script setup lang="ts">
  import ElementSetting from '@/components/common/element-setting'
  import { useElementsStore } from '@/stores/elements'
  import { storeToRefs } from 'pinia'
  const elementsStore = useElementsStore();
  const { selectedElement } = storeToRefs(elementsStore);

  const options = [{label: '单行文本', value: 'single'}, {label: '多行文本', value: 'multiple'}]
</script>

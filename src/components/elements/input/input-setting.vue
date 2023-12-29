<template>
  <ElementSetting>
    <template #other>
      <a-form-item label="文本类型">
        <a-select
          v-model:value="selectedElement!.textType"
        >
          <a-select-option v-for="item of options" :value="item.value">{{ item.label }}</a-select-option>
        </a-select>
      </a-form-item>
      <template v-if="selectedElement?.textType === 'multiple'">
        <a-form-item label="自适应行数">
          <a-switch v-model:checked="selectedElement!.autoSize"/>
        </a-form-item>
        <a-form-item v-if="!selectedElement.autoSize" label="最小行数">
          <a-input-number v-model:value="selectedElement!.minRows" :min="1" :max="selectedElement!.maxRows"/>
        </a-form-item>
        <a-form-item v-if="!selectedElement.autoSize" label="最大行数">
          <a-input-number v-model:value="selectedElement!.maxRows" :min="selectedElement!.minRows"/>
        </a-form-item>
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

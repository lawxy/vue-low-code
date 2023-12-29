<template>
  <ElementSetting>
    <template #other>
      <a-form-item label="数据类型">
        <a-select
          v-model:value="selectedElement!.valueType"
        >
          <a-select-option v-for="item of valueTypeOptions" :value="item.value">{{ item.label }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="最小值">
        <a-input-number 
          :max="selectedElement!.maxVal" 
          v-model:value="selectedElement!.minVal"
          :precision="precision"
        />
      </a-form-item>
      <a-form-item label="最大值">
        <a-input-number 
          :min="selectedElement!.minVal" 
          v-model:value="selectedElement!.maxVal"
          :precision="precision"
        />
      </a-form-item>
    </template>
  </ElementSetting>
</template>

<script setup lang="ts">
  import ElementSetting from '@/components/common/element-setting'
  import { useElementsStore } from '@/stores/elements'
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue';
  const elementsStore = useElementsStore();
  const { selectedElement } = storeToRefs(elementsStore);

  const valueTypeOptions = [
    {
      label: '整数',
      value: 'int'
    },
    {
      label: '保留一位小数',
      value: 'one_decimal',
    },
    {
      label: '保留两位小数',
      value: 'two_decimal'
    }
  ]

  const precision = computed(() => {
    switch(selectedElement.value?.valueType) {
      case 'int': return 0;
      case 'one_decimal': return 1;
      default: return 2;
    }
  })
</script>

<template>
  <ElementSetting>
    <template #other>
      <el-form-item label="数据类型">
        <el-select
          v-model:value="selectedElement!.valueType"
        >
          <el-option v-for="item of valueTypeOptions" :value="item.value">{{ item.label }}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="最小值">
        <el-input-number 
          :max="selectedElement!.maxVal" 
          v-model:value="selectedElement!.minVal"
          :precision="precision"
        />
      </el-form-item>
      <el-form-item label="最大值">
        <el-input-number 
          :min="selectedElement!.minVal" 
          v-model:value="selectedElement!.maxVal"
          :precision="precision"
        />
      </el-form-item>
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

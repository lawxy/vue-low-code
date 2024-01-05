<template>
  <div class="batchBtn">
    <a-button size="small">批量编辑</a-button>
  </div>
  <!-- <div
    ref="table"
  > -->
    <a-table 
      :columns='columns' 
      :dataSource='tempOptions'
      :pagination="false"
      :scroll="{y: 300}"
     
    > 
    <template #bodyCell="{ column, record, index }">
      <div v-if="column.key === 'action'">
        <span class="optbtn minusBtn">
          <MinusCircleOutlined :style="{fontSize: '16px', color: '#F56C6C'}"/>
        </span>
        <span 
          v-if="index === tempOptions.length - 1" 
          class="optbtn" 
          @click="handleAddItem(index)"
        >
          <PlusCircleOutlined :style="{fontSize: '16px', color: '#409EFF'}"/>
        </span>
      </div>
      <div v-else>
        <a-input v-model:value="record[column.key]"></a-input>
      </div>
    </template>
  
    </a-table>
  <!-- </div> -->
</template>

<script setup lang="ts">
  import { useElementsStore } from '@/stores/elements';
  import { ref, watch } from 'vue';
  import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons-vue';
  import { cloneDeep } from 'lodash-es'

  const elementsStore = useElementsStore();
  const { selectedElement, setSelectedProp } = elementsStore;

  const tempOptions = ref(cloneDeep(selectedElement!.valueOptions || []));

  console.log('selectedElement', selectedElement)
  
  const columns = [
    {
      title: '选项',
      key: 'label',
    },
    {
      title: '值',
      key: 'value',
    },
    {
      title: '操作',
      key: 'action',
      width: 80
    },
  ];

  const handleAddItem = (index: number) => {
    tempOptions.splice(index + 1, 0, { label: '', value: '' })
  }

  // const table = ref();
  // const tbody = table?.value?.querySelector('.ant-table-tbody')
  // console.log('tbody', table)
</script>

<style lang="less" scoped>
  .batchBtn {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 8px;
  }
  .optbtn {
    cursor: pointer;
  }
  .minusBtn {
    margin-right: 8px;
  }
</style>
<template>
  <div class="batchBtn">
    <el-button size="small" plain>批量编辑</el-button>
  </div>
  <VueDraggable 
    :model-value="tempOptions" 
    target="tbody" 
    animation="150"  
    handle=".sortbtn"
    @update="onUpdate"
  >
    <el-table :data="tempOptions">
      <el-table-column label="" width="30">
        <template #default="scope">
          <div class="sortbtn">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="menu" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="label" label="属性">
        <template #default="scope">
          <el-input v-model="scope.row.label"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="value" label="值">
        <template #default="scope">
          <el-input  v-model="scope.row.value"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="80">
        <template #default="scope">
          <span 
            class="optbtn minusBtn"
            @click="handleRemoveItem(scope.$index)"
          >
            <!-- <MinusCircleOutlined :style="{fontSize: '16px', color: '#F56C6C'}"/> -->
            minus
          </span>
          <span 
            class="optbtn" 
            @click="handleAddItem"
            v-if="tempOptions.length - 1 === scope.$index" 
          >
          plus
            <!-- <PlusCircleOutlined :style="{fontSize: '16px', color: '#409EFF'}"/> -->
          </span>
        </template>
      </el-table-column>
    </el-table>
  </VueDraggable>
</template>

<script setup lang="ts">
  import { useElementsStore } from '@/stores/elements';
  import { ref, computed, watch } from 'vue';
  import { cloneDeep } from 'lodash-es'
  import { VueDraggable } from 'vue-draggable-plus'

  const elementsStore = useElementsStore();
  const { selectedElement, setSelectedProp } = elementsStore;

  const tempOptions = ref(cloneDeep(selectedElement!.valueOptions || []));

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

  const handleAddItem = () => {
    tempOptions.value.push({ label: '', value: '', id: String(+new Date()) })
  }
  
  const handleRemoveItem = (index: number) => {
    // console.log('length', tempOptions.value.length)
    // console.log('index', index)
    // console.log('empOptions.value', tempOptions.value)
    if(tempOptions.value.length === 1) {
      tempOptions.value = [{label: '', value: ''}]
      return;
    }
    tempOptions.value.splice(index, 1);
  }

  const onUpdate = (e: any) => {
    const { newIndex, oldIndex } = e
    // console.log(e)
    const [el] = tempOptions.value.splice(oldIndex, 1);
    tempOptions.value.splice(newIndex, 0, el);
  }
  watch(tempOptions.value, (val) => {
    console.log('tempOptions')
    console.log(tempOptions.value)
  })
 
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
  .sortbtn {
    cursor: move;
  }
</style>
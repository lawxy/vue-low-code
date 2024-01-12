<template>
  <div class="batchBtn">
    <el-button size="small" plain @click="openBatchDialog">批量编辑</el-button>
  </div>
  <el-form>
    <VueDraggable 
      :model-value="tempOptions" 
      target="tbody" 
      animation="150"  
      handle=".sortbtn"
      @update="onSorted"
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
            <el-input v-model="scope.row.value"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="70">
          <template #default="scope">
            <div :style="{display: 'flex'}">
              <el-icon  
                class="optbtn minusBtn" 
                @click="handleRemoveItem(scope.$index)"
              >
                <RemoveFilled color="#F56C6C"/>
              </el-icon>
              <el-icon  
                v-if="tempOptions.length - 1 === scope.$index"  
                class="optbtn" 
                @click="handleAddItem"
              >
                <CirclePlusFilled color="#409EFF"/>
              </el-icon>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </VueDraggable>
  </el-form>

  <el-dialog
    title="批量设置"
    v-model="batchDialogVisible"
    append-to-body
  >
    <el-input 
      type="textarea" 
      :autosize="{maxRows: 10}" 
      v-model="batchLabel"
    />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="batchDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmBatch" >
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { useElementsStore } from '@/stores/elements';
  import { ref, watch } from 'vue';
  import { cloneDeep } from 'lodash-es'
  import { VueDraggable } from 'vue-draggable-plus'
  import { RemoveFilled, CirclePlusFilled } from '@element-plus/icons-vue'
  import type { TOptions } from '@/types';
  import { ElMessage } from 'element-plus'
  import { isEmpty } from '@/utils';

  const elementsStore = useElementsStore();
  const { selectedElement, setSelectedProp } = elementsStore;
  const tempOptions = ref(cloneDeep(selectedElement!.valueOptions || [])); // 临时的选项列表 只有确定保存的时候才会赋值到真实的列表上
  // 批量设置弹层
  const batchDialogVisible = ref<boolean>(false);
  // 批量设置的输入字符串
  const batchLabel = ref<string>('');

  const handleAddItem = () => {
    tempOptions.value.push({ label: '', value: '', id: String(+new Date()) })
  }
  
  const handleRemoveItem = (index: number) => {
    if(tempOptions.value.length === 1) {
      tempOptions.value = [{label: '', value: ''}]
      return;
    }
    tempOptions.value.splice(index, 1);
  }

  // 拖拽顺序
  const onSorted = (e: any) => {
    const { newIndex, oldIndex } = e
    const [el] = tempOptions.value.splice(oldIndex, 1);
    tempOptions.value.splice(newIndex, 0, el);
  }

  const openBatchDialog = () => {
    batchDialogVisible.value = true;
    batchLabel.value = tempOptions.value.reduce((memo: string, cur: TOptions) => memo + `${memo ? '\n' : ''}${cur.label}`, '');
  }
  // 批量设置确定
  const confirmBatch = () => {
    tempOptions.value = batchLabel.value.split('\n').filter(Boolean).map((label) => {
      const oldValue = tempOptions.value.find(item => item.label === label)
      return {
        label,
        value: oldValue?.value || '',
        id: oldValue?.id || String(+new Date())
      }
    })
    batchDialogVisible.value = false
  }

  const handleConfirm = () => {
    if(tempOptions.value.every((item: TOptions) => (isEmpty(item.label) && isEmpty(item.value)) || (!isEmpty(item.label) && !isEmpty(item.value)))) {
      setSelectedProp('valueOptions', tempOptions.value)
      return
    }
    ElMessage.error('属性或值要么都填，要么都不填!')
    throw new Error('校验失败')
  }
  defineExpose({handleConfirm})
 
  // watch(tempOptions.value, val => console.log(val))
</script>

<style lang="less" scoped>
  .batchBtn {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 8px;
  }
  .optbtn {
    cursor: pointer;
    font-size: 16px;
  }
  .minusBtn {
    margin-right: 8px;
  }
  .sortbtn {
    cursor: move;
  }
</style>
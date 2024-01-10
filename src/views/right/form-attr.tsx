import { defineComponent } from "vue";
import { useFormAttrStore } from '@/stores/form-attr';
import { storeToRefs } from 'pinia';

export default defineComponent({
  setup(){
    const formStore = useFormAttrStore()
    const { setRowGap, setColGap } = formStore;
    const { verticalGap, horizontalGap } = storeToRefs(formStore)
    return () => (
      <el-form label-width='100px' >
        <div class='setting-item'>
          <el-form-item label='水平间隔'>
            <el-input-number min={0} modelValue={+verticalGap.value} onChange={setRowGap}/>
          </el-form-item>
        </div>
        <div class='setting-item'>
          <el-form-item label='垂直间隔'>
            <el-input-number min={0} modelValue={+horizontalGap.value} onChange={setColGap}/>
          </el-form-item>
        </div>
      </el-form>
    )
  }
})
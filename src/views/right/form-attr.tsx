import { defineComponent } from "vue";
import { useFormAttrStore } from '@/stores/form-attr';
import { storeToRefs } from 'pinia';

export default defineComponent({
  setup(){
    const formStore = useFormAttrStore()
    const { setRowGap, setColGap } = formStore;
    const { rowGap, colGap } = storeToRefs(formStore)
    return () => (
      <a-form label-col={{style:{ width: '100px' }}} wrapper-col={{ span: 14 }}>
        <div class='setting-item'>
          <a-form-item label='水平间隔'>
            <a-input-number min='0' value={+rowGap.value} onChange={setRowGap}/>
          </a-form-item>
        </div>
        <div class='setting-item'>
          <a-form-item label='垂直间隔'>
            <a-input-number min='0' value={+colGap.value} onChange={setColGap}/>
          </a-form-item>
        </div>
      </a-form>
    )
  }
})
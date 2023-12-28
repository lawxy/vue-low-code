import { defineComponent } from "vue";
import { useElementsStore } from '@/stores/elements';
import * as Els from '@/components/elements';

export default defineComponent({
  setup() {
    return () => {
      // vue文件中使用storeToRefs包裹， tsx文件在setup函数中使用 自带响应式
      const { selectedElement } = useElementsStore();
      if(!selectedElement?.type) {
        return null
      }
      // @ts-ignore
      const Component = Els[`${selectedElement.type}Setting`];
      return <div id='el-attr'><a-form labelCol={{style: { width: '80px' }}}><Component /></a-form></div>
    }
     
  }
})
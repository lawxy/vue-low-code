import { useElementsStore } from '@/stores/elements'
import { storeToRefs } from 'pinia'
import { defineComponent } from "vue";
import type { IBaseElement } from '@/types';

export default defineComponent({
  setup () {
    return (props) => {
      const elementsStore = useElementsStore();
  
      const { selectedElement, setSelectedProp } = elementsStore;
  
      const handleChange = (field: keyof IBaseElement) => (e: any) => setSelectedProp(field, e.target.value)
      return <>
        <a-form-item label="标签名称">
            <a-input value={selectedElement!.elementName} onChange={handleChange('elementName')}></a-input>
          </a-form-item>
          <a-form-item label="标签对齐方式">
            <a-select>
  
            </a-select>
          </a-form-item>
          <a-form-item label="元素栅格">
            <a-slider min={1} max={24} onChange={handleChange('gridSpan')}></a-slider>
          </a-form-item>
      </>
    }
  }
})
  

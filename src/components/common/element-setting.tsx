import { useElementsStore } from '@/stores/elements'
import { defineComponent } from "vue";
import type { IBaseElement, TOptions } from '@/types';
import { DirectionOpions } from '@/consts'

export default defineComponent({
  setup (props, { slots }) {
    return () => {
      const elementsStore = useElementsStore();
      const { selectedElement, setSelectedProp } = elementsStore;
  
      const handleInputChange = (field: keyof IBaseElement) => (e: any) => setSelectedProp(field, e.target.value)
      const handleChange = (field: keyof IBaseElement) => (v: any) => setSelectedProp(field, v)

      return <>
        <a-form-item label="标签名称">
            <a-input value={selectedElement!.elementName} onChange={handleInputChange('elementName')}></a-input>
          </a-form-item>
          <a-form-item label="标签对齐">
            <a-select value={selectedElement!.elementNameDisplay} onChange={handleChange('elementNameDisplay')}>
              {
                DirectionOpions.map((opt: TOptions) => (
                  <a-select-option value={opt.value}>{opt.label}</a-select-option>
                ))
              }
            </a-select>
          </a-form-item>
          <a-form-item label="元素栅格">
            <a-slider min={1} max={24} value={selectedElement!.gridSpan} onChange={handleChange('gridSpan')}></a-slider>
          </a-form-item>
          { slots?.other?.() }
      </>
    }
  }
})
  

import { useElementsStore } from '@/stores/elements'
import { defineComponent } from "vue";
import type { IBaseElement, TOptions } from '@/types';
import { DirectionOpions } from '@/consts'

export default defineComponent({
  setup (props, { slots }) {
    return () => {
      const elementsStore = useElementsStore();
      const { selectedElement } = elementsStore;
      return <>
        <el-form-item label="标签名称">
            <el-input v-model={selectedElement!.elementName}></el-input>
          </el-form-item>
          <el-form-item label="标签对齐">
            <el-select v-model={selectedElement!.elementNameDisplay} >
              {
                DirectionOpions.map((opt: TOptions) => (
                  <el-option value={opt.value} label={opt.label} />
                ))
              }
            </el-select>
          </el-form-item>
          <el-form-item label="元素栅格">
            <el-slider min={1} max={24} v-model={selectedElement!.gridSpan} ></el-slider>
          </el-form-item>
          { slots?.other?.() }
      </>
    }
  }
})
  

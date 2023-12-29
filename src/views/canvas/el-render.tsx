
import type { IBaseElement } from '@/types';
import * as Els from '@/components/elements'
import { defineComponent } from "vue";
import type { StyleValue } from 'vue';

interface IProps {
  element: IBaseElement
}

export default defineComponent({
  props: ['element'],
  setup(props: IProps) {
    const { element } = props;
    // @ts-ignore
    const Component = Els[`Render${element.type}`]

    return () => {
      const style: StyleValue = {
        flexDirection: element.elementNameDisplay === 'vertical' ? 'column' : 'row',
        alignItems: element.elementNameDisplay === 'vertical' ? 'normal' : 'center'
      }
      return (
        <div
          class='el-render-laybout'
          style={style}
        >
          <div>
            {element.elementName}
          </div>
          <div class='el-render-wrap'>
            <Component element={element} />
          </div>
        </div>
      )
    }
  }
})




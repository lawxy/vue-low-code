import InputSetting from './input/input-setting.vue';
import RenderInput from './input/render-input.vue';
import InputVar from './input/const';
import InputNumberSetting from './input-number/input-number-setting.vue';
import RenderInputNumber from './input-number/render-input-number.vue';
import RadioSetting from './radio/radio-setting.vue';
import RenderRadio from './radio/render-radio.vue';


export {
  InputSetting, 
  RenderInput,
  InputNumberSetting, 
  RenderInputNumber,
  RadioSetting, 
  RenderRadio,
  
}
export const elDefaultVar: Record<string, Record<string, any>> = {'Input': InputVar,}

/**
 * 根据组件文件目录 自动导出
*/

const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/components/elements');
const exportFile = path.join(componentsDir, 'index.ts');

// 由于文件目录会自己根据首字母排序， 这里要自己排序一下([文件名大写]_TEXT)
const sort = [
  'INPUT_TEXT',   // 文本框
  'NUMBER_TEXT',  // 数字框
  'DATE_TEXT',    // 日期
  'TIME_TEXT',    // 时间
  'SELECT_TEXT',  // 下拉
  'RADIO_TEXT',   // 单选
  'CHECKBOX_TEXT' // 多选
]

fs.readdir(componentsDir, (err, files) => {
  if (err) return console.log(err);

  let content = `
/**
  * 此文件可自动生成, 生成脚本在根目录/scripts/auto-export.js
  * 生成规则是文件中的变量名都跟文件夹本身的name强相关
  * eg:
  *   input目录下的文件 ELEMENT_INPUT、RenderInput、INPUT_TEXT、SettingInput
  * 前缀和后缀都是固定的, 大小写也是固定的 -> 组件名采用驼峰命名法, 常量使用全部大写
  * 
*/

import type { IDragElementProp } from '../types'
  `;
  const elementList = [];
  files
    .filter((file) => fs.statSync(path.join(componentsDir, file)).isDirectory())
    .forEach((elementName) => {
      // 仅第一个字母大写
      const OnlyFirstUpper = elementName[0].toUpperCase() + elementName.substring(1);
      // 所有字母大写
      const AllUpper = elementName.toUpperCase();
      // 元素控件名
      const renderComponent = `Render${OnlyFirstUpper}`;
      // 元素属性控件名
      const settingComponent = `Setting${OnlyFirstUpper}`;
      // 元素类型
      const typeKey = `ELEMENT_${AllUpper}`;
      // 元素中文名
      const text = `${AllUpper}_TEXT`;
      // 元素默认值
      const initData = `${OnlyFirstUpper}_initData`
      content += `
import { ${typeKey}, ${renderComponent}, ${settingComponent}, ${text}, initialData as ${initData} } from './${elementName}'
export { ${typeKey}, ${renderComponent}, ${settingComponent}, ${text} } from './${elementName}'
        `
      elementList.push({
        typeKey,
        renderComponent,
        settingComponent,
        text,
        initData
      })
    })
  content += `
export const ElementsList: Record<string, IDragElementProp> = {
      `
  elementList.sort((v1, v2) => {
    return sort.indexOf(v1.text) - sort.indexOf(v2.text)
  }).forEach((item) => {
    content += `
  [${item.typeKey}]: {
    type: ${item.typeKey},
    render: ${item.renderComponent},
    setting: ${item.settingComponent},
    text: ${item.text},
    initialData: ${item.initData}
  },\n`
  })
  content += '}'
  // console.log(content)
  fs.writeFileSync(exportFile, content);
});
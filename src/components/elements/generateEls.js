/**
 * 生成元素导出文件, 文件直接用node执行
*/
import path from 'path'
import fs from 'fs'
import { readdir } from 'node:fs/promises';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dirs = [];
try {
  const files = await readdir(path.resolve(__dirname, './'));
  for (const file of files) {
    const stat = fs.statSync(path.resolve(__dirname,`./${file}`));
    if(stat.isDirectory()){
      dirs.push(file)
    }
  }
} catch (err) {
  console.error(err);
} 

let exportObjStr = ''; // 导出渲染组件字符
let exportDefaultVar = '{'; // 导出的组件常量

const importStr = dirs.reduce((str, dir) => {
  const upperStr = dir.replace(/(?:^|-)([a-z])/g, (_, group1) => group1.toUpperCase());
  const upperStrSetting = `${upperStr}Setting`;
  const renderUpperStr = `Render${upperStr}`
  let curCompStr = `import ${upperStrSetting} from './${dir}/${dir}-setting.vue';
import ${renderUpperStr} from './${dir}/render-${dir}.vue';
`
  exportObjStr += `${upperStrSetting}, 
  ${renderUpperStr},
  `
  if(fs.existsSync(path.resolve(__dirname,`./${dir}/const.ts`))) {
    curCompStr += `import ${upperStr}Var from './${dir}/const';
`;
    exportDefaultVar += `'${upperStr}': ${upperStr}Var,`
  }
  return str + curCompStr
}, '')

const exportStr = `${importStr}

export {
  ${exportObjStr}
}
export const elDefaultVar: Record<string, Record<string, any>> = ${exportDefaultVar}}
`

const exportFile = path.join(__dirname, './index.ts');
fs.writeFileSync(exportFile, exportStr);

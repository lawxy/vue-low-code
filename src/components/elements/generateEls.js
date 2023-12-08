/**
 * 生成元素导出文件
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

let exportObjStr = ''

const importStr = dirs.reduce((str, dir) => {
  const upperStr = dir.replace(/(?:^|-)([a-z])/g, (_, group1) => group1.toUpperCase());
  const upperStrSetting = `${upperStr}Setting`;
  const renderUpperStr = `Render${upperStr}`
  const curCompStr = `import ${upperStrSetting} from './${dir}/${dir}-setting.vue';
import ${renderUpperStr} from './${dir}/render-${dir}.vue';
`
  exportObjStr += `${upperStrSetting}, 
  ${renderUpperStr},
  `

  return str + curCompStr
}, '')

const exportStr = `${importStr}
export {
  ${exportObjStr}
}
`

const exportFile = path.join(__dirname, './index.ts');
fs.writeFileSync(exportFile, exportStr);

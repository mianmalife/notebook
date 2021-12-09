'use strict';
process.on('exit', () => {
  console.log('exit')
})
if (!process.argv[2]) {
  console.log('必须输入文件名')
  process.exit(1)
}
const uppercamelcase = require('uppercamelcase')
const componentname = process.argv[2]
const componentName = uppercamelcase(componentname)
const path = require('path')
const fs = require('fs')
const fileSave = require('file-save')
const componentPath = path.resolve(__dirname, './page', componentname)
const Files = [{
  filename: 'index.js',
  content: `import React from 'react'

function ${componentName}() {
  return <div>hello world</div>
}
export default ${componentName}`
}, {
  filename: 'index.less',
  content: ''
}]
const componentFile = require('./component.json');
if (componentFile[componentname]) {
  console.error(`${componentname} 已存在！`)
  process.exit(1)
}
componentFile[componentname] = `./page/${componentname}/index.js`
fileSave(path.join(__dirname, './component.json'))
  .write(JSON.stringify(componentFile, null, 2), 'utf-8')
  .end('\n')
Files.forEach(item => {
  fileSave(path.join(componentPath, item.filename))
    .write(item.content)
    .end('\n')
})

const read = fs.readFileSync(path.join(__dirname, './component.json'))
fileSave(path.join(__dirname, './testComponent.json'))
  .write(read, 'utf-8')
  .end('\n')
  
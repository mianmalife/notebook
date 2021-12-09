const jsonData = { name: 'json', age: 100, good: undefined }
console.log(JSON.stringify(jsonData))
// {"name":"json","age":100,"good":"good"}
console.log(JSON.stringify(jsonData, ['age']))
// {"age":100}
console.log(JSON.stringify(jsonData, ['age'], 2))
// {
//   "age": 100
// }
const res = JSON.stringify(jsonData, (key, value) => {
  if (value === undefined) {
    value = 0
  }
  return value
})
console.log(res)
// {"name":"json","age":100,"good":0}
const dataJson = {name: 'zhangkx', age: undefined}
const copy = JSON.parse(JSON.stringify(dataJson))
console.log(copy)
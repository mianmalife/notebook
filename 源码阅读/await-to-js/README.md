### await-to-js源码

```js
// promise: 传入的promise对象
// errorExt: 自定义的错误信息
funciton to(promise, errorExt) {
  return promises
    .then(data => [null, data])
    .catch(err => {
      if (errorExt) {
        Object.assign(err, errorExt)
      }
      return [err, undefined]
    })
}
```

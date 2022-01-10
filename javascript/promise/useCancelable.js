const cancelable = require('./cancelableXHR')

const promise = cancelable.createPromiseXHR('http://httpbin.org/get')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})

cancelable.abortPromise(promise)
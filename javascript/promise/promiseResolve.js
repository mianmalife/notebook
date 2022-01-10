// Promise.resolve('hello').then(res => {
//   console.log(res)
// })

// Promise.reject(new Error('错了')).catch(err => {
//   console.log(err)
// })

const promise1 = new Promise((resolve, reject) => {
  resolve(123)
}).then(res => {
  return res
})

// promise1.then(res => {
//   console.log(res)
// })

// console.log('out')

Promise.resolve(promise1).then(res => {
  console.log(res, '11')
})
// Promise.resolve('hello').then(res => {
//   console.log(res)
// })

// Promise.reject(new Error('错了')).catch(err => {
//   console.log(err)
// })

const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve(123)
})

promise1.then(res => {
  console.log(res)
})

console.log('out')
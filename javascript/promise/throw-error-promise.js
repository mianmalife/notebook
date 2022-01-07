// function throwError (value) {
//   throw new Error(value)
// }

// Promise.resolve(2).then(throwError, (err) => {
//   console.log(err, 'err')
// })

// Promise.resolve(3).then(throwError).catch(err => {
//   console.log(err, 'error')
// })

Promise.reject('error').then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})
function promiseTimer(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay)
    }, delay)
  })
}

const startTime = Date.now()

Promise.all([
  promiseTimer(1),
  promiseTimer(32),
  promiseTimer(64),
  promiseTimer(128)
]).then(res => {
  console.log(`${Date.now() - startTime}ms`)
  console.log(res)
})

Promise.race([
  promiseTimer(1),
  promiseTimer(32),
  promiseTimer(64),
  promiseTimer(128)
]).then(res => {
  console.log(`${Date.now() - startTime}ms`)
  console.log(res)
})
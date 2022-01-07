function Promise1 () {
  return new Promise((resolve, reject) => {
    console.log('fast')
    setTimeout(() => {
      resolve(1)
    }, 1)
  })
}

function Promise2 () {
  return new Promise((resolve, reject) => {
    console.log('slow')
    setTimeout(() => {
      resolve(32)
    }, 32)
  })
}

Promise.race([Promise1(), Promise2()]).then(res => {
  console.log(res)
})
// fast slow 1

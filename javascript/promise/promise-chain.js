function taskA(value) {
  console.log('taskA')
  return value * 2
}

function taskB(value) {
  console.log('taskB')
  return value * 4
}

Promise.resolve(111)
.then(taskA)
.then(taskB)
.catch(err => {
  console.log(err)
})
.then((res) => {
  console.log('finally', res)
})

console.log('out')
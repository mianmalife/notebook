const onReject = console.error.bind(console)

Promise.resolve(1).then(() => {
  return Promise.reject(new Error('then reject'))
}).catch(onReject)
function onReadyPromise() {
  return new Promise((resolve, reject) => {
    const readyState = document.readyState
    if (readyState === 'interactive' || readyState === 'complete') {
      resolve()
    } else {
      window.addEventListener('DOMContentLoaded', resolve)
    }
  })
}

onReadyPromise().then(res => {
  console.log('complete')
})

console.log('start')
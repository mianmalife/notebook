function getUrl (URL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', URL, true)
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject(new Error(xhr.statusText))
      }
    }
    xhr.onerror = function() {
      reject(new Error(xhr.statusText))
    }
    xhr.send()
  })
}
getUrl('http://httpbin.org/get').then(res => {
  console.log(res)
}).catch(error => {
  console.log(error)
})
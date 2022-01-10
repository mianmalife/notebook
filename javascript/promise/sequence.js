
function sequenceTask(tasks) {
  function recordValue(results, value) {
    results.push(value)
    return results
  }
  const pushValue = recordValue.bind(null, [])
  return tasks.reduce(function(promise, task) {
    return promise.then(task).then(pushValue)
  }, Promise.resolve())
}
function getURL(URL) {
  return new Promise(function (resolve, reject) {
    const req = new XMLHttpRequest()
    req.open('GET', URL)
    req.onload = function () {
      if (req.status === 200) {
        resolve(req.responseText)
      } else {
        reject(new Error(req.statusText))
      }
    }
    req.onerror = function () {
      reject(new Error(req.statusText))
    }
    req.send()
  })
}

const request = {
  comment: function getComment() {
    return getURL('https://hn.algolia.com/api/v1/search?query=react').then(JSON.parse);
  },
  people: function getPeople() {
    return getURL('https://hn.algolia.com/api/v1/search?query=vue').then(JSON.parse);
  }
}

function main() {
  return sequenceTask([request.comment, request.people])
}

main().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
'use strict'

const requestMap = {}

function createPromiseXHR(URL) {
  const req = new XMLHttpRequest()
  const promise = new Promise(function(resolve, reject) {
    req.open('GET', URL)
    req.onreadystatechange = function() {
      if (readyState === XMLHttpRequest.DONE) {
        delete requestMap[URL]
      }
    }
    req.onload = function() {
      if (req.status === 200) {
        resolve(req.responseText())
      } else {
        reject(new Error(req.statusText))
      }
    }
    req.onerror = function() {
      reject(new Error(req.statusText))
    }
    req.abort = function() {
      reject(new Error('req abort'))
    }
    req.send()
  })
  requestMap[URL] = {
    promise: promise,
    request: req
  }
  return promise
}

function abortPromise(promise) {
  if (typeof promise === 'undefined') {
    return
  }
  let request
  Object.keys(requestMap).some(function(url) {
    if (requestMap[url].promise === promise) {
      request = requestMap[url].request
      return true
    }
  })
  if (request !== null && request.readyState !==  XMLHttpRequest.UNSENT) {
      request.abort()
  }
}

module.exports.createPromiseXHR = createPromiseXHR
module.exports.abortPromise = abortPromise
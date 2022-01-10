function notificationMessage(message, option, callback) {
  if (Notification && Notification.permission === 'granted') {
    const notification = new Notification(message, option)
    callback(null, notification)
  } else if (Notification.requestPermission) {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status
      }
      if (status === 'granted') {
        const notification = new Notification(message, option)
        callback(null, notification)
      } else {
        callback(new Error('user denied'))
      }
    })
  } else {
    callback(new Error('Notification API is not supported by this browser'))
  }
}

function notificationPromise(message, option) {
  return new Promise((resolve, reject) => {
    notificationMessage(message, option, function (err, notification) {
      if (!err) {
        resolve(notification)
      } else {
        reject(err)
      }
    })
  })
}

function notificationThenable(message, option) {
  return {
    'then': function (resolve, reject) {
      notificationMessage(message, option, function(err, notification) {
        if (!err) {
          resolve(notification)
        } else {
          reject(new Error(err))
        }
      })
    }
  }
}
// notificationPromise('hello!').then(res => {
//   console.log(res)
// }).catch(err => {
//   console.warn(err)
// })

Promise.resolve(notificationThenable('hello world!')).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
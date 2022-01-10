'use strict'

if (typeof Promise.prototype.done === 'undefined') {
  Promise.prototype.done = function (onFulFilled, onRejected) {
    this.then(onFulFilled, onRejected).catch(function (error) {
      setTimeout(function () {
        throw new Error(error)
      }, 0)
    })
  }
}
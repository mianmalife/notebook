; (function (context, factory) {
  if (typeof exports === 'object' && typeof module !== undefined) {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define(factory)
  } else {
    context['ZKK'] = factory()
  }
}(
  this, (function () {
    return 'hello'
  })
))
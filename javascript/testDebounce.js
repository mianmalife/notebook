function debounce(fn, wait) {
  let lastCallTime
  let timerId
  let lastArgs
  let lastThis
  let result
  function showInvoke(time) {
    let lastInvokeTime = time - lastCallTime
    return lastCallTime === undefined || lastInvokeTime >= wait
  }
  function invoke() {
    const Args = lastArgs
    const LastThis = lastThis
    lastArgs = lastThis = undefined
    result = fn.apply(LastThis, Args)
    return result
  }
  function startTimer(pendingFn, wait) {
    timerId = setTimeout(pendingFn, wait)
    return result
  }
  function lead() {
    timerId = startTimer(timeExpired, wait)
  }
  function timeExpired () {
    let now = Date.now()
    if (showInvoke(now)) {
      return training()
    }
    timerId = startTimer(timeExpired, remainingWait(now))
  }
  function training() {
    timerId = undefined
    if (lastArgs) {
      invoke()
    }
    lastArgs = lastThis = undefined
    return result
  }
  function remainingWait(time)  {
    const sinceTime = time - lastCallTime
    return wait - sinceTime
  }
  function run(...args) {
    let now = Date.now()
    let should = showInvoke(lastCallTime)
    lastCallTime = now
    lastArgs = args
    lastThis = this
    if (should) {
      if (timerId === undefined) {
        return lead(lastCallTime)
      }
    }
    if (timerId === undefined) {
      timerId = startTimer(timeExpired, wait)
    }
  }

  return run
}
function throttle(fn, wait) {
  let lastCallTime
  let lastInvokeTime = 0
  let timerId
  let lastArgs
  let lastThis
  let result
  function showInvoke(time) {
    let sinceLastCallTime = time - lastCallTime
    let sinceLastInvoke = time - lastInvokeTime
    return lastCallTime === undefined || sinceLastCallTime >= wait
    || (sinceLastInvoke >= wait)
  }
  function invoke(time) {
    const Args = lastArgs
    const LastThis = lastThis
    lastInvokeTime = time
    lastArgs = lastThis = undefined
    result = fn.apply(LastThis, Args)
    return result
  }
  function startTimer(pendingFn, wait) {
    timerId = setTimeout(pendingFn, wait)
    return result
  }
  function lead(time) {
    lastInvokeTime = time
    timerId = startTimer(timeExpired, wait)
  }
  function timeExpired () {
    let now = Date.now()
    if (showInvoke(now)) {
      return training(now)
    }
    timerId = startTimer(timeExpired, remainingWait(now))
  }
  function training(time) {
    timerId = undefined
    if (lastArgs) {
      invoke(time)
    }
    lastArgs = lastThis = undefined
    return result
  }
  function remainingWait(time)  {
    const sinceTime = time - lastCallTime
    const sinceInvoke = time - lastInvokeTime
    console.log(wait - sinceTime, wait - sinceInvoke)
    return Math.min(wait - sinceTime, wait - sinceInvoke)
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
      timerId = startTimer(timeExpired, wait)
      return invoke(lastCallTime)
    }
    if (timerId === undefined) {
      timerId = startTimer(timeExpired, wait)
    }
  }

  return run
}
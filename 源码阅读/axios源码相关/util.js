
var toString = Object.prototype.toString

function isArray(val) {
  return Array.isArray(val)
}

function isUndefined(val) {
  return typeof val === 'undefined'
}

function isBuffer(val) {
  return val !== null
    && !isUndefined(val)
    && val.constructor !== null
    && !(isUndefined(val.constructor))
    && typeof val.constructor.isBuffer === 'function'
    && val.constructor.isBuffer(val)
}

function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]'
}

function isFormData(val) {
  return toString.call(val) === '[object FormData]'
}

function isString(val) {
  return typeof val === 'string'
}

function isNumber(val) {
  return typeof val === 'number'
}

function isObject(val) {
  return typeof val !== null && typeof val === 'object'
}

function isPlainObject(val) {
  return toString.call(val) === '[object Object]'
}

function isDate(val) {
  return toString.call(val) === '[object Date]'
}

function isFile(val) {
  return toString.call(val) === '[object File]'
}

function isBlob(val) {
  return toString.call(val) === '[object Blob]'
}

function isFunction(val) {
  return toString.call(val) === '[object Function]'
}

function isStream(val) {
  return isObject(val) && isFunction(val.pipe)
}

function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]'
}

function trim(val) {
  return val.trim ? val.trim() : val.replace(/^\s+|\s+$/g, '')
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}



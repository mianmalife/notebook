
const defaultConvet = {
  read: function (value) {
    return value
  },
  write: function (value) {
    return value.toUpperCase()
  }
}
function assign(target) {
  console.log(arguments)
  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i]
    for (let key in source) {
      target[key] = source[key]
    }
  }
  return target
}
function init(convert, defaultProps) {
  function set(key, value, props) {
    const obj = assign({}, defaultProps, props)
    console.log(obj)
    let attrbutes = ''
    for (let attr in obj) {
      attrbutes += '; ' + attr
      attrbutes += '=' + obj[attr]
    }
    console.log(attrbutes, 'attrbutes')
    const coo = key += '=' + value + attrbutes
    console.log(coo, 'cookie')
    return {
      value: convert.write(value),
      key: convert.read(key),
      props: convert.read(props)
    }
  }
  return Object.create(
    {
      set: set
    }, {
    convert: { value: Object.freeze(convert) },
    defaultProps: { value: defaultProps }
  })
}
window.api = init(defaultConvet, { path: '/' })
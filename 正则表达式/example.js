const ID_REG = /id=".*?"/
const ID_REG_GOOD = /id="[^"]*"/
const response = '<div id="container" class="wrapper"></div>'
console.log(response.match(ID_REG_GOOD)[0]) // id="container"
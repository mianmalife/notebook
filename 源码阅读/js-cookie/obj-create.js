const coo = Object.create({}, { cos: { value: 864e5 }, year: { value: 2021 } })
coo.cos = 3
console.log(coo.cos, coo.year) // 86400000 2021
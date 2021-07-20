const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
// wait(3000).then(res => {
//     console.log('wait 3s')
// })
// const resov = Promise.resolve('hi resolve')
// const rejc =  Promise.reject('hi reject')
// resov.then((res) => {
//     console.log(res) // hi resolve
// })
// rejc.catch(err => {
//     console.log(err) // hi reject
// })

const result1 = new Promise(resolve => resolve('result1'))
const result2 = new Promise(resolve => setTimeout(() => resolve('result2'), 2000))
const result3 = new Promise(resolve => resolve('result3'))

Promise.all([result1, result2, result3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

async function getResult() {
    try {
        for(const f of [result1, result2, result3]) {
            const res = await f
            console.log(res, '😜😜💖')
        }
    } catch (error) {
        console.warn(error)
    }
}
getResult()

Promise.resolve().then(() => {
    console.log('😊')
})
console.log('hi resolved')
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

async function hello() {
    return 'hello async 的🤞🤞'
}
console.log(hello())
hello().then(p => {
    console.log(p, 'async p')
})

const getImg = async () => {
    const res = await fetch('./ysmd.jfif')
    return await res.blob()
}
getImg().then(blob => {
    const url = URL.createObjectURL(blob)
    const ele = new Image()
    ele.src = url
    document.body.appendChild(ele)
}).catch(err => {
    console.log(err, 'get img err')
})

function consume(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log('consume')
            resolve('over')
        }, ms)
    })
}

async function doneTime() {
    // await consume(2000)
    // await consume(2000)
    // await consume(2000)
    const cons1 = consume(2000)
    const cons2 = consume(2000)
    const cons3 = consume(2000)

    await cons1
    await cons2
    await cons3
}
let startTime =  Date.now()
doneTime().then(res => {
    let endTime = Date.now()
    console.log('花费', + endTime - startTime + 'ms')
})

// setTimeout(() => {
//     alert('hello')
// }, 0)

// alert('world')
console.log(navigator)
console.log(document.querySelector('div'), 'div1')
let fdiv = document.querySelector('div')
let alldiv = document.querySelectorAll('div')
console.log(alldiv, 'alldiv')
let pp = document.querySelector('.pp')
console.log(pp, 'ppp')
let ppid = document.querySelector('#ppid')
console.log(ppid, 'ppid')
let cp = document.createElement('p')
cp.textContent = 'this is textContent'
fdiv.appendChild(cp)
console.log(fdiv.textContent, 'fdiv textContext')
console.log(fdiv.innerText, 'fdiv innerText')

// textContent  返回的是元素的所有文本内容  设置textContent不会触发回流 性能高
// innerText 返回的是给人看的内容  设置会触发回流(受css影响)

let textNode = document.querySelector('.textNode')
// 创建文本节点
let text = document.createTextNode('这是使用创建的文本节点的方法createTextNode创建的')
textNode.appendChild(text)

// 删除节点
fdiv.removeChild(cp)
// 删除自己
fdiv.parentNode.removeChild(fdiv)

// textNode.style.color = 'green'
textNode.setAttribute('class', 'textNodeTest')

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("sucess")
// });

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("sucess")
        }, 5000)
        if (getNextData) {
            getNextData();
        }
    })
}

let promise = getData();
promise.then((res) => {
    console.log("promise fullgilled", res);
})

promise.catch((err) => {
    console.log("rejected", err);
})

// ...............

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve()
        }, 4000)
    })
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve()
        }, 4000)
    })
}

// Promise chaining

// console.log("fetching data1....");
// let p1 = asyncFunc1()
// p1.then((res)=>{
//     console.log("fetching data2....");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//         p2.then(res => {})
//     })

// })

console.log("fetching data1....");
asyncFunc1().then((res) => {
    console.log("fetching data2....");
    asyncFunc2().then((res) => { })
})

// .............
function getData2(dataId,) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("sucess")
        }, 3000)
    })
};

getData2(1).then((res) => {
    return getData2(2)
})
.then((res) => {
    return getData2(3)
})
.then((res)=>{
    console.log(res);
})

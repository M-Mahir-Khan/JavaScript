// async await
// basic example 

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200)
        },2000)
    })
}
async function getWeatherData(){
    await api(); // 1st
    await api(); // 2nd
}

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("sucess")
        }, 3000)
    })
};

async function getAllData(){
    console.log("getting data1....");
    await getData(1)
    console.log("getting data2....");
    await getData(2)
    console.log("getting data3....");
    await getData(3)
}


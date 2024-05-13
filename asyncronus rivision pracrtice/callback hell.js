// Callback hell

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData()
        }
    }, 2000)
}

getData(1, () => {
    console.log("getting data2 ...");
    getData(2, () => {
        console.log("getting data2 ...");
        getData(3, () => {
            console.log("getting data2 ...");
            getData(4, () => {
                console.log("getting data2 ...");
                getData(5)
            })
        })
    })
})

// ..................

placeOrder(function(order){
    notifyChef(order,function(chefStatus){
        if(chefStatus === "Order received"){
            prepareOrder(order,function(prepareOrder){
                serveOrder(order,function(){
                    console.log("Order served successfully !");
                })
            })
        }else{
            console.log("Chef couldn't receive the order.");
        }
    })
})
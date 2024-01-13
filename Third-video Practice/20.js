// understanding callback 

function getTwoNumbersAndAdd(number1,number2,onSuccess,onFailure){
    if(typeof number1 === "number" && typeof number2 === "number"){
        onSuccess(number1,number2)
    }else{
        onFailure()
    }
}

function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
};

function onFail(){
    console.log("wrong data type");
    console.log("please pass numbers only");
}

getTwoNumbersAndAdd(3,4,addTwoNumbers,onFail)
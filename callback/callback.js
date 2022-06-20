//case1

// function add(callback) {
//     callback()
//     console.log("call back function executed");
// }

// function mutiple() {
//     console.log("multiple function is executed");
// }

// add(mutiple)

//case 2

// function add(a,b,callback) {
//     callback(a,b)
//     console.log("call back function executed");
// }

// function mutiple(a,b) {
//     console.log(a*b);
// }

// add(10,5,mutiple)

//case3

function ecommerce(status) {
    var result=status()
    if(result()=="paymentsuccessful")
    console.log("product booked successfully");  
    else
    console.log("insufficent balance");  
}

ecommerce(function paymentstatus() {
    return function () {
        return "paymentsuccessful"
        
    }
    
})

//step1: ecommerce function will be invoked
//step2: status() = paymentstatus() ==> call back function ,name has been overrided
//step3: invoking the paymentstatus() function in line 30
//step4: return function () {
    //     return "paymentsuccessful"
    // }
//step5: invoking the result() function in line 31
//step6: redirecting to line 38
//step7: returns data "paymentsuccessful"
//step8: redirecting the line 31 (if condition)
//step9: if the return data is matched with  condition provided in if statement => if block will be executed or else block will be executed 
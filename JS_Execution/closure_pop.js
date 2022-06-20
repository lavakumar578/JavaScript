// var a=10
// var b=20
// function sample() {
//     console.log(a);
//     var a=30
//     console.log(b);
//     function inner() {
//         var a=30
//         var b=40
//         console.log(a);
//         console.log(b);
        
//     }
//     inner()
// }
// sample()

var a=55
var b=45
function sample() {
    console.log(a);
    console.log(b);
    var b=30
    console.log(b);
                function inner() 
                    {
                        console.log(a);
                        console.log(b);
                         var a=100
                         console.log(a);  
                  }
                 inner()
}
sample()

// function outer(value1) {
//     return function inner(value2) {
//         return value1+value2
        
//     }  
// }

// var sum=outer(8)
// console.log(sum(12));
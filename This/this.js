var myself={
    f_name:"lava"  ,
    l_name:"kumar"  ,
   // x:20,
    greet:function () {
        var x=10
     
        console.log(this.x);
        console.log(x);
    }
}
myself.greet()
console.log(myself.x);

// var myself1={
//     f_name:"lava"  ,
//     l_name:"kumar"  ,
//     greet:function () {
//      console.log(myself.x);
//     }
// }
// myself1.greet()
array=[20,30,40,50,60,"String"]

//case1: accessing Elements from a array in normal way
var a=array[1]
var b=array[4]
console.log(a);
console.log(b);
//o/p:
//30
//60

// case2: accessing first 3 Elements from a array

var [x,y,z]=array
console.log(x,y,z);
//o/p:  20 30 40

// case3: accessing first 2 Elements from a array

var [x,y]=array
console.log(x,y);
//o/p:  20 30

//case4: accessing  Elements from a array by skipping some in middle

var [x,,,,,y]=array
console.log(x,y);
//o/P: 20 String
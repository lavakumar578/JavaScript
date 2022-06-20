var array=[20,10,2.5,,2.5,true]
for (var index of array) {
    console.log(index);
    
}

array.forEach((element,index,array)=>{
    console.log(array[index])
 })
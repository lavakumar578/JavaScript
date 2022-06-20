var array=[20,13.5,,,false,20]
var index=0
do {
    console.log(index+"  "+array[index])
    index++
} while (index<=array.length)

array.forEach((element,index,array)=>{
    console.log(array[index])
 })
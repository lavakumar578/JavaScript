var array=[11,"String",20,2.5,false,20]
var index=0
while (index<array.length) {

    console.log(index+"  "+array[index]);
    index++
    
}

array.forEach((element,index,array)=>{
    console.log(array[index])
 })
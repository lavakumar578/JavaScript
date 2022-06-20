var array=[10,2.5,,true]




for (var index = 0; index < array.length; index++) {
   console.log(index+"   "+array[index]); 
  
}


array.forEach((element,index,array)=>{
   console.log(array[index])
})
var array=[20,10,20.5,,true]
for (var index in array) {

   console.log(index+" "+array[index]);
        
    }

    array.forEach((element,index,array)=>{
      console.log(array[index])
   })
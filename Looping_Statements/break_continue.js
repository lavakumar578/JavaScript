var array=[20,200,"String",true,'H']
for (var index = 0; index < array.length; index++) {
   
    if(index<3)
    {
        console.log("hi");
        continue
        console.log("hello");
    }
    console.log(index+"  "+array[index]);
}
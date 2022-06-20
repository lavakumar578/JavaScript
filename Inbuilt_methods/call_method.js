var myself={
    f_name:"Lava",
    l_name:"Kumar",
    address:function () { 
       console.log("hello hi this is "+this.f_name+" "+this.l_name)
        this.greeting()
        }
}


var myself1={
    f_name:"Lava",
    l_name:"M",
    greeting:function () { 
       console.log("signing off "+this.f_name+" "+this.l_name)
      
    }
}

//myself.address.call(myself1)
myself1.greeting.call(myself)
// //myself.address()

// function wishes(value1,value2) {
//     console.log(value1+this.f_name+" "+this.l_name+value2);
    
// }


// wishes.call(myself,"good evening "," Welcome")
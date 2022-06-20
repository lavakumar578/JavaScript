var myself={
    f_name:"Lava",
    l_name:"Kumar",
    address:function () { 
       console.log("hello hi this is "+this.f_name+" "+this.l_name)

        }
}


var myself1={
    f_name:"Lava",
    l_name:"M",
    greeting:function () { 
       console.log("signing off "+this.f_name+" "+this.l_name)
        this.address()
    }
}

function greetings(greet1,greet2) {
    console.log(greet1+" "+this.f_name+" "+this.l_name+" "+greet2);
    
}


//greetings.apply(myself,["hello","good afternoon"])

//myself1.greeting.apply(myself)

myself.address()
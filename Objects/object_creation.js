var myself={
    f_name:"Lava",
    l_name:"Kumar",
    mobileNumber:9966204096,
    fullName : { f_name:"Lava", //object
    l_name:"Kumar"},
    company:"Test Yantra",
    address:function () {       //function
        return "chittoor,Andhra Pradesh"
    },
    
    skills:["java","selenium","javascript"] //array
}


var biodata=Object.create(myself)
biodata.__proto__=myself
biodata.f_name="lava"
biodata.l_name="kumar"
biodata.mobileNumber="+91996204096"

console.log(biodata);
//console.log(myself);
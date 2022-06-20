var myself={
    f_name:"Lava",
    l_name:"Kumar",
    mobileNumber:99966204096,
    fullName : { f_name:"Lava", //object
    l_name:"Kumar"},
    company:"Test Yantra",
    address:function () {       //function
        return "chittoor,Andhra Pradesh"
    },
    
    skills:["java","selenium","javascript"] //array
}

// case1:
var myname=myself.f_name
console.log(myname); //lava

//case2:
var {f_name}=myself
console.log(f_name); //lava
//condition1:curly braces
//condition2: referenece name should be same as object name

//case3:
var {f_name:person_name}=myself
console.log(person_name);  //lava
console.log(f_name); //f_name is not defined
//condition1:change the reference variable=> so we declare our own reference variable


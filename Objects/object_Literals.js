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
// console.log(myself.skills[1]); //To get particular array present inside a object
// console.log(myself.skills);
// console.log(myself.fullName.l_name); //to get a particular property present inside a object and that object is present in inside object
// //adding a property to an object
// console.log(myself);
// myself.country="India"
// console.log(myself);
// //deleting a property from  Object
// console.log(myself);
// console.log(myself["mobileNumber"]);
 console.log(myself);


// //printing a function inside a object
// console.log(myself.address());

// //printing a array inside a object
// console.log(myself.skills);

// //printing a object inside a object
// console.log(myself.fullName);

// //printing  a particular property(method1)
// console.log(myself.mobileNumber);
// //printing  a particular property(method2)
// console.log(myself["mobileNumber"]);

// //printing entire object
// console.log(myself);




// var TestYantra={
//     Trainee_id:1116,
//     Trainee_details:["f_name","l_name","mobileNumber","fullName"],
//     Trainee_name:{
//             f_name:"Lava",
//             l_name:"Kumar",
//             mobileNumber:99966204096,
//             fullName : { f_name:"Lava",
//             l_name:"Kumar"},
//             company:"Test Yantra",
//             address:function () {
//                 return "chittoor,Andhra Pradesh"
//             },
//     current_location:"Kathireguppe",
//     address:"RoomNo:GC6 ,3rd floor,Goplan coworkers",
// }
// }
// console.log(TestYantra);

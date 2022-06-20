
var person1={
    fname:"Ramesh",
    lname:"S",
    greeting:function () {
        console.log(this.fname+" "+this.lname);
    }
}


var person2={
    fname:"Suresh",
    lname:"R",
    fullname:function () {
        console.log(this.fname+" "+this.lname);
    }
}


var greetings=function (greet1,greet2,greet3) {
    console.log(greet1+"hello"+" "+this.fname+" "+this.lname+" "+"you are selected for add shoot for 5star "+greet3+" "+greet2);
}


var star=greetings.bind(person2,"hello","happy","r u")
star()

var star2=greetings.bind(person1,"hello","happy","r u")
star2()
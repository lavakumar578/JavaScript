var myself={ fname:"lava",
		lname:"kumar",
		greeting:function(){
					console.log("hello! every one this is "+this.fname+" "+this.lname)
		}
		}

var myself1={ fname:"Lavakumar",
		lname:"M",
		address:function(){
					console.log(this.fname+" "+this.lname+" signing off")
		}
		}

function greetings(greet1,greet2)
{
	console.log(greet1+" "+greet2+this.fname+" "+this.lname)
}
/****************************************************************************************************************/
myself.greeting.call(myself1)

//o.P:   hello! every one this is Lavakumar M


 myself1.address.call(myself)

//o.P: lava kumar signing off

greetings.call(myself,"Nice to meet","you ")

//o/p: Nice to meet you lava kumar

/****************************************************************************************************************/

myself.greeting.apply(myself1)

//o.P:   hello! every one this is Lavakumar M

myself1.address.apply(myself)

//o.P: lava kumar signing off

greetings.apply(myself,["Nice to meet","you "])

//o/p: Nice to meet you lava kumar

/****************************************************************************************************************/

var result=myself.greeting.bind(myself1)
result()

//o.P:   hello! every one this is Lavakumar M

var result1=myself1.address.bind(myself)
result1()

//o.P: lava kumar signing off

var result2=greetings.bind(myself,"Nice to meet","you ")
result2()

//o/p: Nice to meet you lava kumar

/****************************************************************************************************************/
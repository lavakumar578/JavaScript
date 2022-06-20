class biodata{
    constructor(fname,lname,mail)
    {
    this.fname=fname
    this.lname=lname
    this.mail=mail  
    }
    a=20
    static b=40

    display(){
        console.log(this.a);    //20    ==> non static method invoking non static variable by this keyword
        console.log(this.b);    //undefined
        console.log(biodata.b); //40    ==> non static method invoking static variable by class name
    }
    
    static sample(){
        console.log(this.a);        //undefined
        var person=new biodata()    //object creation   
        console.log(person.a);      //20                ==> static method invoking non static variable by instatance reference
        console.log(this.b);        //40                ==> static method invoking static variable by this keyword
        console.log(biodata.b);     //40
    }

    display2(){
        this.display() // ==> invoking a  non static method inside a non static method
        biodata.sample() // ==> invoking a static method inside a non static method by class name
    }

    static sample2(obj_ref){
      this.sample()  //==> invoking a static method inside a static method
        obj_ref.display() //==> invoking a non static method in a static method

    }

}

var person1=new biodata("lava","kumar","lavakumar578@gmail.com")
var person2=new biodata("ramesh","kumar","rk@gmail.com")

// console.log(biodata.b);
// console.log(person1.a);
// console.log(person1.fname);
// console.log(person2.mail);
// console.log(biodata);
//person1.display()
biodata.sample2(person1)


var abc=30
function sum(a1,b1) {
    {
        var a=20
        let b=40
        const c=20
        console.log(a);
        console.log(b);
        console.log(c);
    }

    {
        var d=120
        let e=140
        const f=210
        console.log(d);
        console.log(e);
        console.log(f);
    }

}
sum(1.5,2.3)
//global
//abc
//sum(a1,b1)
//local
//a,d
//script
//block
//b,c,e,f
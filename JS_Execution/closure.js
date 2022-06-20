var my_name="Lavakumar"
console.log(my_name);
function display_name() {
    var age=24
 
    function display_age() {
        console.log(age);
        console.log(my_name);
    }
    display_age()
}
display_name()




//display_name() is outer function
// display_age() is inner function

var array=[20,2.5,25]

//     var array1=["lavakumar"]
//     console.log(array.concat(array1));
//     console.log(array);
// 1)   array.concat(number[])
//     combines two or more array
//     without modification any existing changes
//     output:
//     [ 20, 2.5, 'String', 'S', 356, 'lavakumar' ]
//     [ 20, 2.5, 'String', 'S', 356 ]
   
/******************************************************************************************************************************* */   
//     console.log(array);
//     console.log(array.push("lava"));
//     console.log(array);
// 2)   array.push(Element)
//     it will add the given element at the end of an array & returns length of array
//     it will modify the existing array
//     output:
//     [ 20, 2.5, 'String', 'S', 356 ]
//     6
//     [ 20, 2.5, 'String', 'S', 356, 'lava' ]

/******************************************************************************************************************************* */
//     console.log(array);
//     console.log(array.pop());
//     console.log(array);
// 3)  array.pop()
//     it will remove the last element from an array & returns the removed element in the console
//     it will modify the existing array  
//     output:
//     [ 20, 2.5, 'String', 'S', 356 ]
//     356
//     [ 20, 2.5, 'String', 'S' ]
/******************************************************************************************************************************* */
//     console.log(array);
//     console.log( array.unshift("500000"));
//     console.log(array);
// 4)   array.unshift(element)
//     it will add the given element at the begining of an array & returns length of array
//     it will modify the existing array
//     output:
//     [ 20, 2.5, 'String', 'S', 356 ]
//     6
//     [ '500000', 20, 2.5, 'String', 'S', 356 ]
/******************************************************************************************************************************* */
//         console.log(array);
//         console.log(array.shift());
//         console.log(array);
// 5)  array.shift()
//         it will remove the 1st element from array and return the removed element
//         it will modify the existing array
//         output:
//         [ 20, 2.5, 'String', 'S', 356 ]
//         20
//         [ 2.5, 'String', 'S', 356 ]
/******************************************************************************************************************************* */
//         console.log(array);
//         console.log(array.splice(1,1,8000000));
//         console.log(array);
//  6) array.splice(start index,delete Count,new Element)
//         it will delete and as well as adds the given Element to the specific index of an array and returns the deleted element 
//         it will modify the existing array
//         [ 20, 2.5, 'String', 'S', 356 ]
//         [ 2.5 ]
//         [ 20, 8000000, 'String', 'S', 356 ]
/******************************************************************************************************************************* */
//         console.log(array);
//         console.log(array.slice(1,4));
//         console.log(array);
// 7) array.slice(start index,end index)
//         it will return the fragment of an array based on the specified index and end index will be executed 
//         returns the fragment in the form of an array
//         without modification any existing changes
//         output:
//         [ 20, 2.5, 'String', 'S', 356 ]
//         [ 2.5, 'String', 'S' ]
//         [ 20, 2.5, 'String', 'S', 356 ]

/******************************************************************************************************************************* */
//         console.log(array);
//         console.log(array.every((element) => {
//             return element <20
//         }))
//         console.log(array);
// 8) it will return the boolean result based on the condition like it will check each and every value present in the array and returns true
// without modification any existing changes
//         output:
//         [ 20, 2.5, 25 ]
//         false
//         [ 20, 2.5, 25 ]
/******************************************************************************************************************************* */
// console.log(array);
//         console.log(array.some((element) => {
//             return element <25
//         }))
//         console.log(array);
// 9) it will return the boolean result based on the condition like it will check atleast value present in the array and returns true
// without modification any existing changes
//         output:
//         [ 20, 2.5, 25 ]
//         true
//         [ 20, 2.5, 25 ]
/******************************************************************************************************************************* */
//         console.log(array);
//         console.log(array.indexOf(25,1));
//         console.log(array);
// 10) it will return the index value of search element traversing is from left ==> right
//         without modification any existing changes        
//         output:
//         [ 20, 2.5, 25 ]
//         2
//         [ 20, 2.5, 25 ]
/******************************************************************************************************************************* */
//         console.log(array);
//         console.log(array.lastIndexOf(25,1));
//         console.log(array);
// 11) it will return the index value of search element traversing is from  right ==> left
//         without modification any existing changes        
//         output:
//         [ 20, 2.5, 25 ]
//         -1
//         [ 20, 2.5, 25 ]
/******************************************************************************************************************************* */
//         console.log(array);
//         console.log(array.reverse());
//         console.log(array);
// 12) it will return the array in reverse order 
//     it modify the changes in existing array
//     output:
//     [ 20, 2.5, 25 ]
//     [ 25, 2.5, 20 ]
//     [ 25, 2.5, 20 ]
/******************************************************************************************************************************* */

//         console.log(array);
//         console.log(array.includes(25));
//         console.log(array);
// 13) it will return the Boolean result based on the search Element presence
//         without modification any existing changes         
//         output:
//         [ 20, 2.5, 25 ]
//         true
//         [ 20, 2.5, 25 ]
/******************************************************************************************************************************* */
//         console.log(array);
//         console.log(array.join("String"));
//         console.log(array);
// 14) it will add the element of an array based on the character specified & return the String
//         without modification any existing changes
//         output:
//            [ 20, 2.5, 25 ]
//             20String2.5String25
//             [ 20, 2.5, 25 ]

//    array.forEach((element,index)=>{
//         console.log(element+":"+index);
//            console.log(element*2);
//      })
//      console.log(array);
        // console.log(array);
        // console.log(array.forEach((element,index) => {
        //                 console.log(element+":"+index);
        //                 console.log(element*2);
        //             }));
        // console.log(array);
// 15) it will perform the task given in callback function and return void implemented by map method of an array
//         without modification any existing changes
//         output
//         [ 20, 2.5, 25 ]
//         20:0
//         40
//         2.5:1
//         5
//         25:2
//         50
//         undefined
//         [ 20, 2.5, 25 ]

        // console.log(array);
        // array.forEach((element,index) => {
        //       console.log(  element*3)
        //             })
        // console.log(array);
        // output:
        // [ 20, 2.5, 25 ]
        // undefined
        // [ 20, 2.5, 25 ]


//    console.log(array);
//         console.log(array.map((element,index) => {
//                       return element*3
//                     }));
//         console.log(array);
// 16) it will return the modified from of array implemented by filter method of an array
//         without modification any existing changes
//         output:
//         [ 20, 2.5, 25 ]
//         [ 60, 7.5, 75 ]
//         [ 20, 2.5, 25 ]

// console.log(array);
//         console.log(array.filter((element,index) => {
//             if(element>2)
//                       return element
//                     }));
//         console.log(array);

// 17) array.filter(()=>{//filtercondition})   
//     it will return the array based on filter condition it will return the elements in the form of an array that only satisfies the given filter condition
//     it will not modify the existing array     
// o/p:
// [ 20, 2.5, 25 ]
// [ 20, 2.5, 25 ]
// [ 20, 2.5, 25 ]
// console.log(array);
//         console.log(array.filter((element,index) => {
//             if(element>3)
//                       return element
//                     }));
//         console.log(array);
// o/p:
// [ 20, 2.5, 25 ]
// [ 20, 25 ]
// [ 20, 2.5, 25 ]



// 18)it will sort the array in ascending order (return a-b) descending order (return b-a)
//     based on return specified in compare function

// console.log(array);
//         console.log(array.sort((a,b) => {
//             return a-b
//                     }));
//         console.log(array);
// output:
// [ 20, 2.5, 25 ]
// [ 2.5, 20, 25 ]
// [ 2.5, 20, 25 ]
// console.log(array);
//         console.log(array.sort((a,b) => {
//             return b-a
//                     }));
//         console.log(array);
//         output:
//         [ 20, 2.5, 25 ]
//         [ 25, 20, 2.5 ]
//         [ 2.5, 20, 25 ]
//         var number=[175,25,50]
//        function myfunc(total,number) {
//                return total-number
//        }
//         console.log(number.reduce(myfunc));
//        console.log(number);


//19)array.reduce((previousvalue,currentValue)=>{})
//it will reduce the entire array into a single unit / to the required for(array,object,number)
// const number=[175,50,20]
//        function myfunc(total,number) {
//                return total-number     
//        }
//         console.log(number.reduce(myfunc));
//        console.log(number);
// ex:175-50-20=105
// var number=[175,50,210]
//        function myfunc(total,number) {
//                return total-number     
//        }
//         console.log(number.reduce(myfunc));
//        console.log(number);
//        ex:175-50-210=-85

// 20)array.reduceRight((previousvalue,currentValue)=>{})
//         similar to reduce method but traversing is from right==>left
// var number=[10,20,30,40]
//        function myfunc(total,number) {
//                return total-number     
//        }
//         console.log(number.reduceRight(myfunc));
//        console.log(number);
//        ex: 40-30-20-10=-20
//
// const number=[175,50,20]
//        function myfunc(total,number) {
//                return total-number     
//        }
//         console.log(number.reduceRight(myfunc));
//        console.log(number);
//       ex:20-50-175=-205



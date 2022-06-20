var str=" Have A Good Day "

// 1)   str.length
// return the length of an String Object
// console.log(str.length);
// o/p: 19

/***********************************************************************************/
// 2)str.split(separator)
// split the String into sub String based on separator
// return type is in form of an array
// does not modify the existing String
//console.log(str.split(" "));
//o/p: [ '', 'have', 'a', 'good', 'day', '' ]
// console.log(str.split("a"));
// o/p: [ ' h', 've ', ' good d', 'y ' ]
/***********************************************************************************/
// 3) str.charAt(position)
// return character of specific index
// console.log(str.charAt(6));
// o/p: a
// console.log(str.charAt(10));
//o/p: o
/***********************************************************************************/
//4)str.charCodeAt(index)
//prints the unicode of the character and default unicode for char is 32
//console.log(str.charCodeAt(5));
//o/p: 32
//console.log(str.charCodeAt(50));
//o/p: NaN
/***********************************************************************************/
// 5)str.concat()
// does not modify the existing String
// return tyoe is String
// string is appended to the end of the existing string
// console.log(str.concat("hi"));
// console.log(str);
//o/p: have a good day hi
/***********************************************************************************/
//6)str.endsWith
//checks whether the string is ending with the same searching string
//return type is boolean
//console.log(str.endsWith("e"));
//o/p: false
//console.log(str.endsWith(" "));
//o/p: true
/***********************************************************************************/
//7)str.includes(search_String)
//it will check whether the particular search string is present in the string
//return type is boolean
//console.log(str.includes("have"));
//o/p: true
/***********************************************************************************/
//8)str.indexOf(search_String)
//it will return the index value of the search_String from begining too
// console.log(str.indexOf("d"));
// o/p: 11
/***********************************************************************************/
//9)str.lastIndexOf(search_String)
//it will return the index value of the search_String from last too
// console.log(str.lastIndexOf("g"));
// o/p: 8
/***********************************************************************************/
//10)str.replace(search_String)
// it will replace a paticular str with search_String only one time
// console.log(str.replace("have","hi"));
// o/p:  hi a good day 
//console.log(str.replace("o","a"));
//o/p:  have a gaod day (it will replace only onces or 1 time in a string)
/***********************************************************************************/
// 11)str.repeat(Number)
//it will repeat the string Number times
// console.log(str.repeat(3));
// o/p:  have a good day  have a good day  have a good day 
/***********************************************************************************/
console.log(str.trim());

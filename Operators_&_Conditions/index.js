/*
operators
symbols        operation
+                add
-                sub
*                mul
/                div
%                 reminder
**                pow
*/

// arithmatic operator
console.log("arithmatic operator")
let a=2;
let b= 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


//unary operator     (pree increment and post inreament)
console.log("pre and post increment")
console.log(++a);
console.log(b++);
console.log(b);



// comparison operator
console.log("comprison operator")
console.log(10>5);

// strict qulati (===)   value bhi same and data type same ho 
console.log('5'===5);  // false
console.log(5===5);  // true

// loose eqality (==) only compary value
console.log('5'==5);  //true



// ternanru operator 
console.log("ternary operator")


let age=25;
// age =5;

let result = (age>18) ? 'i can vote' : 'i can not vote';

console.log(result);



//logical operator
console.log("logical operator");

let ans =(true && true & true);
console.log(ans);

// falsy truthy  value  and shoer circuit

console.log(true && 'my name');

// short circuit
console.log(false || 'my name' || 7);


// bitwise opertor 
 




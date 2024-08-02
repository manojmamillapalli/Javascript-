// data types
//primitive datatypes
//null, undefined, Number, BigInt, String,Boolean
//typeof()--operator to check data type

var a;
a = 35;
console.log(a);
console.log(typeof (a));


var b = "Hello world";
console.log(b);
console.log(typeof (b));


var c = true;
console.log(c);
console.log(typeof (c));



var d = null; // even though null value is primitive it stores in the form of object.
console.log(d);
console.log(typeof (d));

var e;
console.log(e);
console.log(typeof (e));


var f = 1234567891010888888888888;// it prints in the form of exponential 
console.log(f);
console.log(typeof (f));



var g = BigInt(f);// bigint is used for the round off the large numbers
console.log(g);
console.log(typeof (g));


//object, array

var array = [12, 1, 2, 3, 4, 5];
console.log(array);
console.log(typeof (array));// type of array is object
console.log(array[2]);// output 2


//object

var obj = {
    name: "manoj naidu",
    class: "jap-11",
    age: 23,
    marks: "A"
}
console.log(obj);
console.log(typeof (obj));


//operators 
//ARITHMETIC OPERATORS
//+,-,*,/,**
var a = 12;
var b = 13;
console.log(a + b);
console.log(a ** 2);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//post increment 

var c = 10;
console.log(c);
console.log(c++);
console.log(c);
console.log(c--);
console.log(c);



//pre increment

console.log(++c);
console.log(--c);



var d = 45;
var e = "hello";
var f = 63;
var g = d + f + e;
console.log(g);
console.log(typeof (g));

//assignment
var a = 34;
var b = 23;
var c = a + b;
console.log(c);


//relational operators 
//<=, >=, ==, ===, !=, !==
var a=25;
var b='25';
console.log(a==b);//t
console.log(a>=b);//t
console.log(a<=b);//t
console.log(a===b);//f
console.log(a!=b);//f
console.log(a!==b);//t
console.log(a<b?"true" : "false");// checks if a>b or not if a>b prints false other wisw prints true


//logical operators 
//&&, ||, !
var a=25;
var b=35;
var c=40;
console.log(a>b && a>c);
console.log(a<b || b<c);
console.log(!b);
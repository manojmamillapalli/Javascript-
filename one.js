// data types
//primitive datatypes
//null, undefined, Number, BigInt, String,Boolean
//typeof()--operator to check data type

var a;
a=35;
console.log(a);
console.log(typeof(a));


var b="Hello world";
console.log(b);
console.log(typeof(b));


var c=true;
console.log(c);
console.log(typeof(c));



var d=null; // even though null value is primitive it stores in the form of object.
console.log(d);
console.log(typeof(d));

var e;
console.log(e);
console.log(typeof(e));


var f=1234567891010888888888888;// it prints in the form of exponential 
console.log(f);
console.log(typeof(f));



var g=BigInt(f);// bigint is used for the round off the large numbers
console.log(g);
console.log(typeof(g));


//object, array

var array=[12,1,2,3,4,5];
console.log(array);
console.log(typeof(array));// type of array is object
console.log(array[2]);// output 2
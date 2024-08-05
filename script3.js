//functions


// function function_name( Parameters)
// {
//     requirement
// }
// calling function with name( arguments)       THE BASIC SYNTAX OF THE FUNCTION

function Hello()
{
    console.log("Hello world");
}
Hello();


function Add(a,b)// void function
{
    c=a+b;
    console.log(c);
}
Add(3,5);


function Add(a,b)// non void function
{
    c=a+b;
    return c;
}
console.log(Add(3,9));


function Multiply(a,b,c)
{
    d=a*b*c;
    console.log(d);
}
Multiply(2,3,4);


//ARROW FUNCTIONS
 const a=()=>// non parametarized
 {
    console.log("arrow function");
 }
 a();

 const a1=(c,d)=>// parameterized
 {
    e=c*d;// void function
    console.log(e);
 }
 a1(2,3);


 const a2=(f,g,h)=>// using return type
 {
    mul=f*g*h;
    return mul;
 }
 console.log(a2(3,4,5));

 //javascript is an asynchronic language

 function a3(xyz)// passing function 2 as an argument
 {
    console.log("code");
    xyz();// calling function2
 }
 a3(b3);//calling function2 in the function1
 function b3()
 {
    console.log("gnan");
 }




 function A(xyz)
 {
    console.log("function A");
    xyz(3,4);
 }
 A(B);
 function B(a,b)
 {
   c=a+b;
   console.log(c);
 }
 

let arr=[12,13,14,15,16];// map function used to iterate the array or map
arr.map((values, index)=>{
    console.log(values*2);
})


//filter in an array
let arr1=[12,13,14,15,16,17];
let filtered=arr.filter(item=>item>12);// function which is used to add conditions 
filtered.map((values, index)=>
{
    console.log(values);
})

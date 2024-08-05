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
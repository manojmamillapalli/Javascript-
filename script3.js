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

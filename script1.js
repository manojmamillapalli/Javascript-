// conditional statements 
var a=false;
if(a)
{
    console.log("true");
}
else{
    console.log("false output");
}


//user input taking

var age=Number(prompt("Enter your age"));
if(age<18)
{
    alert("they are not eligible for voting");
}
else if(age>=18)
{
    alert("eligible for voting");
}
else{
    alert("enter correct age");
}


//if age is less than 5
var age=Number(prompt("enter your age"));

if(age<5)
{
    alert("no entry fee");
}
else if(age>5 && age<10)
{
    alert("pay rupees 5");
}
else if(age>=10 && age<=15)
{
    alert("pay 15 rupees");
}
else if(age>15)
{
    alert("pay 20 rupees");
}
else{
    alert("give correct input");
}

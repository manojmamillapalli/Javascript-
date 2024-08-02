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




//switch case 

var num1 =Number(prompt("enter the number1"));
var num2 =Number(prompt("enter the number1"));
var operator =prompt("Enter the operator");
switch(operator)
{
    case '+':
        alert("Addition of two numbers is"+" "+(num1+num2));
        break;
    case '-':
        alert("subctraction of two numbers is"+" "+(num1-num2));
        break;
    case '*':
        alert("Multiplication of two numbers is"+" "+(num1*num2));
        break;
     case '/':
        alert("Division of two numbers is"+" "+(num1/num2));
        break;
    case '**':
        alert("power of two numbers is"+" "+(num1**num2));
        break;
    default:
        alert("enter valid output");

}

//loops

//while loop

var i=1;
while(i<=10)
{
    i++;
    console.log(i);
}


// dow hile loop

var j=20;
do{
    j++;
    console.log(j);
}
while(j>=40)

//for loop

for(k=14;k<=20;k++)
{
    console.log(k);
}


// 

var arr=[12,13,14,15,16,17];

for(var x in arr)
{
    console.log(arr[x]);
}
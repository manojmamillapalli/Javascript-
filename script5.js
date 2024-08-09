//functions


// function otpgenerator()
// {
//     var OTP="";
//     for(let i=1;i<=6;i++)
//     {
//         OTP+= Math.floor(Math.random()*10);
//     }
//     alert(`your OTP IS ${OTP}`);
//     document.getElementById('one').innerHTML=`your OTP IS ${OTP}`;
//     document.getElementById('one').style.color="red";
//     localStorage.setItem('otp', OTP);
//     var storeddata=localStorage.getItem('otp');
//     console.log(`ypur info is ${storeddata}`);

// }


//arrays

const array = ["banana", "litchi", "kiwi", "berry"];
console.log(array);
console.log(array.length);
console.log(array[2]);
console.log(array.join('#'));
console.log(array.pop());
console.log(array);
console.log(array.push("oranges"));
console.log(array);
console.log(array.shift());
console.log(array);
console.log(array.unshift("apple"));
console.log(array);
//splice methos which prints the elements from the given index to no of elements mentioned
var a=array.splice(0,1);// it prints exatly one element starting from zero
console.log(a);
var b=array.splice(0,2,"mango","peach");
console.log(b);
console.log(array);

var array1=[1,2,3,4,5,6,7,8,9];

array1.map(element => {
  console.log(element);
  return element; // map requires a return value
});

let arr1=[12,13,14,15,16,17];
let filtered=arr1.filter(item=>item>12 && item<16);// function which is used to add conditions 
filtered.map((values, index)=>
{
    console.log(values, index);
})


let arr3 = [1, 2, 3, 4, 5];
arr3.reduce((a, c) => {
    d = a * c;
    console.log(d);
    return d;
}, 100)

var a=[1,2,3,4,5,6,7,8,9];
var b=[...a];
console.log(b);
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

const array=["banana", "litchi", "kiwi", "berry"];
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
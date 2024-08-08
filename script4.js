//August 6/ 2024
function clickAction() {
    alert("you clicked the button");
}

function changeAction() {
    alert("you entered the text" + " " + `${input.value}`);
}

function mouseOverAction() {
    alert("on the text");
}
function mouseOutAction() {
    alert("mouse is out of the text");
}

document.getElementById('one1').innerHTML = "hello everyone";
document.getElementById('one1').style.color="green";
document.getElementsByTagName('h4')[0].innerText = "content through tag";
document.getElementsByClassName('two')[0].innerHTML = "context from class name";
//reduce function
let arr3 = [1, 2, 3, 4, 5];
arr3.reduce((a, c) => {
    d = a * c;
    console.log(d);
    return d;
}, 100)


//spread operator is used for concatination of two or more arrays
//use(...) operator which if from ES6 concept
"usestrict"
var a = [12, 13, 14, 15, 16]
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var c = [...a, ...b];
console.log(c);


var arr1 = [...a];
console.log(arr1);
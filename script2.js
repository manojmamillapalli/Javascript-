//for in loop
var arr=[12,13,14,15,16,17];

for(var x in arr)//iterable 
{
    console.log(arr[x]);
}


// for in loop in object

var object=
{
    name:"manoj",
    place:"place guntur",
    age:20
}
for(var x in object)
{
    console.log(object[x]);
}


// foe of loop in array and object

var arr=[20,30,40,50];
for(var x of arr) //here the x value stores the values of the array FileSystemDirectoryHandle. rather than indexes
{
    console.log(x);
}

// var number1=
// {
//     name:"pinakini",
//     number:12345,
//     place:"chennai"
// }
// for(var x of number1)
// {
//     console.log(x);// for objects the for of loop is not iterable
// }

// for each loop
var arr=[1,2,3,4,5,6,7,8,9,10];
arr.forEach((val, index)=>{
    console.log(`value ${val} + index also ${index}`)
})
// Create your own resume data in JSON format
var resume = {
    name: "Poornima.E",
    husband: "Dhinesh Kumar",
    designation: "Graphics Designer",
    qualification: "DCS",
    qualification1: "multimedia",
    age: 25,
    isMarried: true,
    mobile: 9566569460,
    address: {doorNo: 4,
    street: "new street",
    city: "salem",
    pincode: 636206}
}
// let resumeJSON = JSON.stringify(resume);
 // console.log(resumeJSON);
// let profileobj = JSON.parse(resumeJSON);
console.log(resume);

// For the given JSON iterate over all for loops 
// (for, for in, for of, forEach)

// for loop
var software = ["photoshop","illustrate","coreldraw",
"premierepro","aftereffects","vscode","nodejs"]
for (var i=0;i<=0;i++){
console.log(software);
}

// for in loop
// for in loops supports object only
var student = {
    name: "poornima",
    age: 26,
    mobile: 9566569460,
}
for (var key in student){
console.log(`key is ${key} and value is ${student[key]}`);
}

// for in loop
// for of loop supports array only
let array = [0,1,2,3,4,5,6,7,8,9];
for(let elements of array){
    console.log(elements);
}
var numbers = [5,10,15,20,25];
var copy = [];
var loopArray = function(item,index){
console.log(`item is ${item} and index is ${index}`);
}
numbers.forEach (loopArray);



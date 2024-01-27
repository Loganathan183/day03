var 
remoteJSON = {"name" : "person1","age" : 5},
    localJSON = {"age" : 5,"name" :"person1"};
console.log((remoteJSON, localJSON));


let obj1 = {"name": "Person1", "age": "5"};
let obj2 = {"age": "5", "name": "Person1"};

const stringifiedObj1 = JSON.stringify(obj1);
const stringifiedObj2 = JSON.stringify(obj2);

if (stringifiedObj1 === stringifiedObj2) {
    console.log("The JSON objects are equal");
} else {
    console.log("The JSON objects are not equal");
}
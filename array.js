// create an array of number 
var numbers= [6,7,9,8,3,34,56,86,12,32];
// remove the last item of the array
console.log(numbers,"initial number")

numbers.pop();
console.log(numbers,"after removing the last item")
// remove the first item of the array
numbers.shift();
console.log(numbers,"after removing the first item")

// add my name to the array
var name="Miracle" ;
numbers.push(name);
console.log(numbers,"after pushing the name to the last index")

// add the current hour to the array
var today= new Date().getHours();
numbers.push(today);
console.log(numbers,"after adding current hour")

numbers.splice(4,1);
console.log(numbers,"after removing the 4th element")

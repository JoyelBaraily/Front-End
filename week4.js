



console.log(`1. // Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
`); 

//creation of Array
var ages = [3,9, 23, 64, 2, 8, 28,93]; 
console.log(ages);

//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] – ages[0] is not allowed!

var ages = [3,9, 23, 64, 2, 8,28, 93]; 
//this shows the first element, which starts at 0 and that is 3
let firstElement = ages[0]

//I have done this code to figure out the last elemt
let lastElement = ages[ages.length - 1];
 // subtraction of these two elements
console.log(lastElement - firstElement);

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).


//I added the new age '34' by using the push method
ages.push(34);
 firstElement = ages[0] 
lastElement = ages[ages.length - 1];
 console.log(lastElement - firstElement);

//1c. Use a loop to iterate through the array and calculate the average age. 

let sum = 0; 
for (let i = 0; i < ages.length; i++) {
sum += ages[i];
}
//-- I looped the array and found the sum and after that I got the average by dividiing the sum by the ages.length
var averageAge = sum / ages.length

console.log('Average age is ' + averageAge)



 







console.log(`2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
`)
//2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

var names = ['Sam', 'Tommy', 'Tim','Sally', 'Buck', 'Bob']; //this is the array
 console.log(names);
let Sum = 0;
for (let i = 0; i < names.length; i++) {

    Sum += names[i].length;
}  

let averagenumberName = Sum/names.length;// to get the average I did that

console.log(averagenumberName)






console.log(`3.  How do you access the last element of any array?`)

let lastElementofNames = names[names.length-1];// You access the last element by doing this

console.log(lastElementofNames)
;
console.log(`4.  How do you access the first element of any array?`)


let firstElementofName = [0]
console.log(firstElementofName); // you access the first element by putting [0]



console.log(`5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`)

//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array





let nameLengths = []

for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
 //I iterated the names array and added the names length by pushing

console.log(nameLengths) 




console.log(`6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. `)


let sumOfAllElements = 0;
for (let i = 0; i < nameLengths.length; i++){//loop
sumOfAllElements += nameLengths[i]; //calculating the sum
}

console.log(sumOfAllElements) 


console.log(`7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).`)

function wordRepeat (word, n){
    let newWord = '';
    for (let i = 0; i < n; i++){
        newWord += word//word and newWord added
    } return newWord

} 
let word = 'Blue'
let n = 4
console.log(wordRepeat(word, n));



console.log(`8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.`)

function fullName (firstName, lastName){
    return firstName + ' '+ lastName // first name and last name with a space in between then\m
 
}
let firstName = 'Joyel'//assigning the first name
let lastName = 'Baraily'//assigning the  lastname
console.log(fullName(firstName, lastName));//first name and last name altogether to equal a full name


console.log(`9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)


function sumOfNumberGreaterThan100(numbers){
   let sum = 0;
for (let i = 0; i < numbers.length; i++){
sum+= numbers[i]//sum of the number
} return sum > 100//returning if sum is greater than 100
}
let numbersArray = [20,40,60,80]

console.log (sumOfNumberGreaterThan100(numbersArray));




console.log(`10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.`)

function averageNumber(numbers){
    let sum = 0; 
    for (let i = 0; i< numbers.length; i++ ){
    sum += numbers[i];//sum of numbers
} return sum / numbers.length//to get the average I divided the sum by the numbers.length
}
let numbersinArray = [20,30,40,30];
console.log(averageNumber(numbersinArray));






console.log(`11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)



//function to get the average number
function averageNumber(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];//sum of the numbers
    } return sum / numbers.length//getting the average
}

//the function is getting the average of the 2 arrays and it will return if the average if the average of array 1 is greater than average of array 2
function averageGreaterInFirstArray (array1, array2 ){
    let averageArray1 = averageNumber(array1)//getting the average of array1
    let averageArray2 = averageNumber(array2);//getting the average of array 2
return averageArray1 > averageArray2;//will return if the average of array1 is greater than average of array 2
}

let array1 = [5,5,5,5,5]
let array2 = [2,2,2,3,3]

 console.log(averageGreaterInFirstArray(array1, array2));





console.log(`12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)

function willBuyDrink (isHotOutside, moneyInPocket){
    return isHotOutside && moneyInPocket > 10.50;//will return if the two combined is greater than 10.50
}

let HotOutside = true//I assigned true
let money = 15//I assigned a number

console.log(willBuyDrink(HotOutside, money));


console.log(`13.  Create a function of your own that solves a problem. `)

function customerName  (CustomerfirstName, CustomerlastName){
return CustomerfirstName + ' ' + CustomerlastName;//combines first and last name of customer with a space in between 
}

let CustomerfirstName = "Indra"
let CustomerlastName = 'Lamgadey'

console.log(customerName(CustomerfirstName, CustomerlastName));

//In comments, write what the function does and why you created it. 

//I made function that shows the customer's Name and why I created it is to show the customer's first and last name. 
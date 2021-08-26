



function main()
{
    console.log('SANITY TEST'); //check if the function ran works!
    // everyOtherWord("HELLLOOO! MY NAME IS LIZZY SO NICE TO MEETT YOU"); // calls the function 
    //exercise2("HELLO THERE!");
    //console.log(first(5));
    // console.log(last(-5));
    // exercise5();
    // exercise6(2, 20);
    // exercise7();
}

main();


//     // function finds every other word
//     // function changes every other word to UPPERCASE
//     // function spits out the same sentence, with every other word uppercase.
//     let newSentence = myWordString.join(" ");
//     console.log(newSentence);
//     return newSentence;
   
// }
// console.log(everyOtherWord("hello my name is Lizzy!"));//so cool, every string we pass in will return a string 

//split( ) is useful ONLY for strings. NOT ON ARRAYS




// 1: Text Manipulation and Arrays
// Write a JavaScript function that accepts a sentence of words all in lowercase, and returns every other word in all caps.

// ex. in a galaxy far far away -> in A galaxy FAR far AWAY

function everyOtherWord(sentence){
// make a function 
//sentence parameter passed in
// we have a sentence. what do we want to do?
// make sure it is lowercase 
sentence = sentence.toLowerCase(); // all words are changed to lowercase.
//we can use split to change the sentence passed in to seperate arrays?
sentence = sentence.split(" "); // string is split into an array!
// what do we want to do with this array?
// we want to loop through the array length, find all of the odd indexs and change them to uppercase!
for(i = 0; i < sentence.length; i++)
{
    // we are now looping through the length of the array. how do we find the odd index?
    if (i % 2 != 0) {
              // change the odd words to uppercase
       sentence[i] = sentence[i].toUpperCase(); // because of the IF condition the odd index of sentence are chosen to be uppercase and restored inside.
          
}
 

}
let newSentence = sentence.join(" "); // this makes a new string!
console.log(newSentence); 
// use the .join method to revert the array back to a string




}









// 2: Text Manipulation and Arrays
// Write a JavaScript function that accepts a word in all lowercase or in all uppercase, and returns the word in the opposite case. Hint: see toLowercase()

// ex. hello -> HELLO or HOWDY -> howdy

// working with a function
// working with a conditional(s).
// working with if statement


function exercise2(sentence)
{
if (sentence === sentence.toUpperCase())
{
    return sentence = sentence.toLowerCase();
}
else if (sentence === sentence.toLowerCase())
{
   return sentence = sentence.toUpperCase();
   

}





}


// 3: Functions and Arrays
// Return first n number of elements
// Write a JavaScript function called first() to get the first n element(s) of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// ex:

// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],1));
// Expected Output :

// [7, 9, 0] 
// [7] 

// working with functions (JS function first())
// working with a single parameter
// working with arrays
// using a 'return' statement.
// create an array of numbers
// when the user console logs the array and adds a comma with another number,
// the console outputs the given amount of numbers the user asks for 

function first (number)
{// made an argument to pass in for the user to choose

let myArray = [3, 4, 5, 6, 7, 8, 9, 10]; // created an array

// use the .slice() method!
return myArray.slice(0, number);


}

// 3b: Return last n number of elements
// Write a JavaScript function called last to get the last n number of element(s) of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// ex:

// console.log(last([7, 9, 0, -2],3)); 
// console.log(last([7, 9, 0, -2],6));
// Expected Output :

// [9, 0, -2] 
// [7, 9, 0, -2]

function last (number)
// made an argument to pass a number in
{
let myArray = [3, 4, 5, 6, 7, 8, 9, 10, 11];// create an array of numbers

return myArray.slice(number);


}


// ============= JS REVIEW 3 ============== //

// Input and Loops
// Create two variables called five assigned 5 and eight assigned 8. 
// Next create an if statement compairing five is less than eight. 
// If it's true, , print “5 is less than 8”. Else, print ERROR in the console or browser..

// USER INPUT
function exercise5(){

let five = 5;
let eight = 8;

if( five < eight)
{
    console.log("five is less than eight");

}
else(console.log("ERROR"));
}



function exercise6(min, max)
{// two parameters are passed in, one for the small number and one for the big number!
    // create an empty array to use for the range
    let evenNumbers = [];
    // create a for loop to count all the numbers from the min to the max
    for(i = min; i <= max; i++)
    {
        // if number is a mutiple of 2, add to evenNumbers array
        if(i % 2 === 0)
        {// numbers are pushed into this array
            evenNumbers.push(i);
        }
    }
    console.log(`${evenNumbers}`); // console.log the result!



}




// 3. Input and Loops
// Ask the user to create two variables. Create a function that takes two variables and returns the largest of the two numbers in the console or browser.



function exercise7()
{
let userPromptOne = prompt("Enter a number: ");
let userPromptTwo = prompt("Enter Another number: ");
if (userPromptOne > userPromptTwo)
{
    alert(`${userPromptOne} is the biggest number!`);
}
else if (userPromptOne < userPromptTwo)
{
alert(`${userPromptTwo} is the biggest number!`);

}

}


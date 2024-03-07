//1.1
function findMinLengthofThreeWorlds(a, b, c){
if (a.length < b.length && a.length < c.length) {
    return a.length;
} else if (b.length < a.length && b.length < c.length) {
    return b.length;
} else { return c.length; }
}
var output = findMinLengthofThreeWorlds('Orange', 'Lemon', 'Strawberry');
console.log(output); //5

//1.2
function filterOddElements(arr){
    const arrayOfEven = []; 
    for (let i = 0; i < arr.length; i++){
        if(arr[i]%2 == 1) {
            arrayOfEven.push(arr[i]);
        }
    } 
    return arrayOfEven;
}
output = filterOddElements([13, 21, 6, 4, 58, 0, 7]);
console.log(output); //[13, 21, 7]

//1.3
function getLengthOfShortestElement(arr){
    var result = arr[0].length;
    for (let i = 0; i < arr.length; i++){
        if(arr[i].length < result) {
            result = arr[i].length
        }
    } 
    return result;
}
output = getLengthOfShortestElement(["array", "of", "words", "java-script"]);
console.log(output); //2

//1.4
function joinArrayOfArrays(arr){
    return [].concat(...arr);
}
output = joinArrayOfArrays([[4, "word"], [true, true, false], [15, 44, "hello"]]);
console.log(output); //[4, "word", true, true, false, 15, 44, "hello"]

//1.5
function findSmallestNumberAmongMixedElements(arr){
    const arrOfNumbers = arr.filter(e => typeof e === "number");

    if (arr.length == 0 || arrOfNumbers.length == 0) { return 0; }
    
    var smallestNumber = arrOfNumbers[0];
    for (let i = 0; i< arrOfNumbers.length; i++) 
    {
        if (arrOfNumbers[i] < smallestNumber) {smallestNumber = arrOfNumbers[i];}
    }
    return smallestNumber;
    }
output = findSmallestNumberAmongMixedElements([4, "word", -27, "another word"]);
console.log(output); //-27

//1.6
function computeSummationToN(n){
    var result = 0, i = 1;
    while ( i < n+1) {
        result += i;
        i++;
    }
    return result;
}
output = computeSummationToN(8);
console.log(output); //36

//1.7
function convertScoreToGrade(num){
    switch (true) {
        case (num <= 100 && num >= 90):
            return "A";
        case (num <= 89 && num >= 82):
            return "B";  
        case (num <= 81 && num >= 75):
            return "C";
        case (num <= 74 && num >= 69):
            return "D";
         case (num <= 68 && num >= 60):
            return "E";  
        case (num <= 59 && num >= 35):
            return "Fx";
        case (num <= 34 && num >= 0):
            return "F";
        default:
            return "Invalid Score"    
    }
}
output = convertScoreToGrade(84);
console.log(output); //B

//1.8
function getLongestOfThreeWords(word1, word2, word3){
    switch(true){
        case (word1.length > word2.length && word1.length > word3.length):
        case (word1.length == word2.length || word1.length == word3.length):
            return word1;
        case (word2.length > word1.length && word2.length > word3.length):
        case (word2.length == word3.length):
            return word2;
        case (word3.length > word1.length && word3.length > word2.length):
            return word3;            
    }
    }
    var output = getLongestOfThreeWords('to', 'maybe', 'overcompensate');
    console.log(output); //overcompensate

//1.9
function multiply(num1, num2){
    var result = 0;
    for(let i = 0; i < num2; i++){
        result += num1;
    }
    return result;
}
output = multiply(45, 3);
console.log(output); //135

//1.10
function computeSumBetween(num1, num2){
    if (num2 < num1) { return 0; }

    var result = 0;
    for(let i = num1; i < num2; i++){
        result += num1;
    }
    return result;
}
output = computeSumBetween(50, 13);
console.log(output); //0, тому що num2 < num1
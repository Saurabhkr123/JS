// const input1 = [1,2,-2,11,7,1]
// //const output = 7

// const input2 = [1,4,7,2,4,7]
// //const output2 = [4]

// const sortedArr = input1.sort((a,b) => a-b); //[11,7,2,1,1,-2]
// const secondLargest = sortedArr[1];
// console.log(sortedArr);
// console.log(secondLargest);


// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Ipl is worst game to watch"));

// function reverseString(str) {
//     var newString = "";
//     for (var i=0; i<str.length; i++) {
//         newString += str[i];
//     }
//     return newString;
// } 
// console.log(reverseString('hello'));

// const arr1 = [40,56,54,67,54,78];
// const found = arr1.find(el =>el > 55);
// console.log(el);
// function fibonacci(n) {
//     if (n <= 0) {
//       return [];
//     } else if (n === 1) {
//       return [0];
//     } else if (n === 2) {
//       return [0, 1];
//     } else {
//       var series = fibonacci(n - 1);
//       series.push(series[series.length - 1] + series[series.length - 2]);
//       return series;
//     }
//   }
  
  // Testing the function
//   var n = 10; // Generate the first 10 Fibonacci numbers
//   var result = fibonacci(n);
//   console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// function romanToInteger(roman) { //III
//     const romanToValue = {
//       I: 1,
//       V: 5,
//       X: 10,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000
//     };
  
//     let result = 0;
  
//     for (let i = 0; i < roman.length; i++) {
//       let current = romanToValue[roman[i]]; // current = 1
//       let next = romanToValue[roman[i + 1]]; // next = 5
  
//       if (next && current < next) {
//         result = result - current;
//       } else {
//         result = result + current;  // result = 10+1+
//       }
//     }
  
//     return result;
//   }
//   console.log(romanToInteger("XIV"));

// const input1 = {a:1,b:2,c:3,d:10,e:12};
// const input2 = {a:2,e:12,f:6,d:10};
 
// function matchStr(input1,input2) {
//     const matchObj = {};
//     for(let i in input1){
//       if (input1[i] = input2[i]){
//        matchObj[i] = input1[i];
//         }
//     }
//       return matchObj;
//     }
    

// console.log(matchStr(input1,input2));

// for(let i=0; i<5;i++) {
//    setTimeout (() => 
//    console.log(i)
//    ,10000) 
// }

// for(var i=0;i<5;i++){
//     setTimeout(
//       ()=>console.log(i),
//       10000)
//   }


// for(var i=0; i<5; i++) {
//     console.log(i);

// }

// function fact(n) {
//     let factorial = 1;
//     for(let i=2;i<=n;i++) {
//        factorial = factorial*i;
//     }
//     return factorial;
// }
// console.log(fact(5));

// const input = [1,2,5,98,78];
// let sum = 0;
// for(let i in input) { 
//     sum = sum + input[i];   
// }
// console.log(sum);

// const input1 = [7,9,11,-2,8,90];
// const sortedArr = [...input1].sort((a,b) => b-a )
// const secondLargest = sortedArr[1];
// console.log(sortedArr);
// console.log(secondLargest);


// let numbers = [1, 2, 3, 4, 5, 6];
// function func(numbers){
//   let value = [];
//    for(let i=0;i<numbers.length;i++){
//      for(let j=i+1;j<numbers.length;j++){
//        if(numbers[i]+numbers[j] ===7){
//         value.push([numbers[i],numbers[j]]);
//        }
//      }
//    }
//    return value;
// }

// let value = func(numbers);
// console.log(value);
// const isarmstrongnumberChecker = (number) => { //153
//   let num = number.toString(); // "153"
  
//   let sum = 0;
//   for(let i=0;i<num.length;i++){
//     let digits = parseInt(num[i]);
//     sum = sum + Math.pow(digits,num.length);
    
//   }
//  return(number===sum)
// }
// console.log(isarmstrongnumberChecker(153));

// const getLocation=() => {
//   if('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(success,error)
//   }
// }
// function success(position) {
//   console.log(position)
// }
// function error(error){
//   console.error("sorry")
// }
// getLocation();

// const getLocation = () => {
//   if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(success, error);
//   }
// };
// function success(position) {
//   console.log(position);
// }
// function error() {
//   console.error(error);
// }
// getLocation();
//  const input1 = {a:1,b:2,c:3,d:10,e:12};
//  const input2 = {a:2,e:12,f:6,d:10};
//  const matchObj = (input1,input2) => {
//     let arr = {};
//     for(let i in input1){
//       if(input1[i]===input2[i]){
//         arr[i] = input1[i]
//       }
//     }
//     return arr;
//  }
//  console.log(matchObj(input1,input2))

// console.log((0||1)); //1
// console.log((1 || 2));  //1
// console.log((1 && 2));  //2
// console.log((0 && 1)); //0

// const arr = [4,7,3,9,6]
// const secondLargest = [...arr].sort((a,b) => a-b);
// const length = arr.length;
// console.log(length);
// console.log(secondLargest[3]);
// let arr = [-1,-2,3]
// function largestOfNumber(arr){
//   let minLargest = -Infinity
//     for(let i in arr){
//        if(arr[i] > minLargest){
//         minLargest = arr[i];
//        }
//     }
//     return minLargest;
// }
// console.log(largestOfNumber(arr));


// const transposeMatrix = (matrix) => {
//   // const rows = matrix.length;
//   // const cols = matrix[0].length;
//  const transposedMatrix = Array(matrix.length).fill(null).map(() =>Array(matrix[0].length));
 
//   for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[0].length;j++){
//       transposedMatrix[j][i] = matrix[i][j];
//     }
//   }
//   return transposedMatrix;

//  } ;
// const matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// const transposedMatrix = transposeMatrix(matrix);
// console.log(transposedMatrix);

// for(let i=0;i<2;i++){ // i=2
//   for(let j=0;j<3;j++){  // j=2
//     console.log("Hello");
//   }
// }


// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// let str = "hello India my love"
// console.log(reverseString(str));


// var isAnagram = function(s, t) {
//   if(s.length !==t.length){
//     return false;
//   }
//   let str = s.split('').sort();
//   let str1 = t.split('').sort();
//   for(let i=0;i<str.length;i++){
   
//           if(str===str1){
//             return true;
//           }
//       }
//       return false;
  
// };


// var isAnagram = function(s, t) {
//   if(s.length!==t.length){
//       return false;
//   }
//   let str = s.split('').sort();
//   console.log(str);
//   let str1 = t.split('').sort();
//   console.log(str1);
//   for(let i=0;i<str.length;i++){
//  if(str[i]!==str1[i]){
//             return false;
//           }
//         }
//       return true; 
// };
// console.log(isAnagram("rat","car"))

// var isPalindrome = function(s) {
//   if(s===""){
//       return true;
//   }
//   if(s.length===2){
//     return false;
//   }
//  let str = s.replace(/[^a-zA-Z]/g, "").toLowerCase();
//  let str1 = str.split('').reverse().join('');
//  for(let i=0;i<str.length/2;i++){
//      if(str[i]==!str1[i]){
//          return false;
//      }
//  } 
//  return true;
// };
// console.log(isPalindrome("Op"))

// function transposeMatrix(matrix) {
//   const transposedMatrix = Array(matrix.length).fill(null).map(() => Array(matrix[0].length))
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       transposedMatrix[j][i] = matrix[i][j]
//     }
//   }
//   return transposedMatrix;
// }
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// const transposedMatrix = transposeMatrix(matrix);
// console.log(transposedMatrix);

// const arr = [-1,0,3,5,9,12]
// const target = 9;

// function binarySearch(arr,target){
//   for(let i in arr){
//     if(arr[i] === target){
//        return i;
//     }
//   }
//   return [];

// }
// console.log(binarySearch(arr,target));

// var reverseWords = function(s) {
//   return s.split('').reverse().join('');
// };
// let s = "the sky is blue";
// console.log(reverseWords(s));

// console.log("6"/"3"); //2

// function mergeArr(list1,list2){
//   const mergearr = [...list1,...list2]
//   const sortedarr = mergearr.sort((a,b) => a-b)
//   return sortedarr ;
// }
// const list1 = [1,2,3,4]
// const list2 = [1,4,5]
// console.log(mergeArr(list1,list2));

// function getLastWord(str) {
//   const trimmedStr = str.trim();
//   console.log(trimmedStr);
//   const words = trimmedStr.split(/\s+/);
//   console.log(words)
//   const lastWord = words[words.length - 1];
//   console.log(lastWord);
//   return lastWord;
// }
// const inputString = "   This is an example string   ";
// const lastWord = getLastWord(inputString);
// console.log("Last Word:", lastWord);

// function happyNum (num){
//   let sum = 0;
//   let input = num.toString().split('');
//   for(let i=0;i<input.length;i++){
//     sum = sum + parseInt(input[i]*input[i]); 
//   }
//   if(sum===1){
//     return true;
//   }
//   else{
//     return false;
//   }
  
// }
// console.log(happyNum(19));

// const a = [1,2,3]
// a[10] = 99;
// console.log(a.length);
// let a = [1,2,3,(5,5,6),(3,8,9)];
// let [x,y,...z] = a;
// console.log(z);
// console.log(x);
// console.log(y);
// function findLastWord(str) {
//   const trimmedStr = str.trim();
//   const words = trimmedStr.split(/\s+/);
//   if (words.length === 0) {
//       return null; 
//   }
//   else {
//    const word1 = words[words.length - 1];
   
//   }
//   // Return the last word
//   return word1.length;
// }

// function plusOne(digits){
//   let n = digits.length;
//   for(let i=n-1;i>=0;i--){
//     if(digits[i]===9){
//       digits[i]=0;
//     }
//     else {
//       digits[i]++;
//       return digits;
//     }
//   }
//   return [1, ...digits]

// function plusOne(digits) {
//     const n = digits.length;
//     for (let i = n - 1; i >= 0; i--) {
//         if (digits[i] === 9) {
//             digits[i] === 0;
//         } else {
//             digits[i]++;
//             return digits;
//         }
//     }
//     return [1, ...digits];
// }
// const digits= [9]
// console.log(plusOne(digits));




  
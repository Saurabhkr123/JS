
// console.log("9" > "11"); // True  
// console.log("09">"11"); // False
// console.log("9" > 11)    //False
// console.log("" > -1)     //True    // unicode
// console.log("Rowdy" > 1)  // False
// console.log("">1)       // False
// console.log(0==false)   // true
// console.log(0===false)  // false
//    console.log(Boolean(false)); // false
//    console.log(Boolean(true));  // true
//    console.log(Boolean('false')); //true
//    console.log(Boolean(""));  //false
//    console.log(Boolean(0));   //false
//    console.log(Boolean(1));   //true

//   const object1 = {key:"value"}
//   const object2 = {key:"value"} // false for both
//   console.log(object1==object2)
//   console.log(object1===object2)
// let arr = [1,2,3]
// let arr1 = [1,2,3]
// console.log(arr === arr1)
// let arr = [1,0,5,7,9,0,4,6,0]
// function shiftingArr(arr){
//     let arr1 = []
//     let arr2 = []
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] !== 0){
//             arr1.push(arr[i]);
//         }
//         else {
//             arr2.push(arr[i])
//         }      
//     }
//     let mergeArr = [...arr1,...arr2]
//     return mergeArr;
// }
// console.log(shiftingArr(arr));

// let arr = [1,0,5,7,9,0,4,6,0]
// function shiftingArr(arr){
//   arr.sort((a,b) => 
//   {
//     if(a===0,b!==0){
//         return 1;
//     }
//     else if(a!==0,b===0){
//         return -1
//     }
//     else {
//         return 0;
//     }
//   }
  
//   )
//   return arr;
// }
// console.log(shiftingArr(arr))

// let nums1 = [1,3], nums2 = [2,4] //output = 2

// function medianOfmergearr(nums1,nums2){
//     let mergearr = [...nums1,...nums2].sort((a,b) => a-b)
//     if(mergearr.length%2 !==0){
//        return mergearr[Math.floor(mergearr.length/2)];
//     } 
//     else {
//         return (mergearr[(mergearr.length/2)-1] + mergearr[mergearr.length/2])/2
//     }
    
// }
// console.log(medianOfmergearr(nums1,nums2))

// finding duplicates from array

//   let arr = [2,3,4,3,2,7,9,6]

// function findingDuplicates (arr){
//     let duplicates = [];
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i] === arr[j] ){
//                 duplicates.push(arr[i])
                
//             }
//         }
//     }
//     return duplicates;
// }
// console.log(findingDuplicates(arr));

// let arr = [2,3,4,3,2,7,9,6]
// function findingDuplicates(arr){
//     let arr1 = [];
//     let duplicates = {}
//     for (let i of arr){
//         duplicates[i] = (duplicates[i] || 0) + 1  
//         if(arr[i] > 1){
//             arr1.push(arr[i])
//         }
//     }
    
//     // for(let value in duplicates){
//     //     if(duplicates[value] > 1){
//     //         arr1.push(parseInt(value))
//     //     }
//     // }  
//     return arr1;
// }
// console.log(findingDuplicates(arr));

// let nums =  [-1,0,1,2,-1,-4]

// function threeSum (nums){
//    for(let i=0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length-1;j++){
//         for(let k=j+1;k<nums.length-2;k++){
//             if(nums[i]+nums[j]+nums[k] === 0){
//                 return [nums[i],nums[j],nums[k]]
//             }
//         }
//     }
//    }
//    return [];
// }
// console.log(threeSum(nums));

// write a function that takes string as input and return longest word in string, if there are multiple largest word encounter then 
//  return first one encountered
//  let str = "India is seventh largest country"
//  const findlongestWord = (str) => {
//    if(str.trim().length === 0) {
//     return false;
//    }
// // //    let strArr = str.split(" ").sort((a,b) => b.length - a.length)
// // //    return strArr[0];
// //  let strArr = str.split(" ");
// // //  return strArr.reduce((accum,curword) =>(curword.length > accum.length ? curword:accum),"");
//    let strArr = str.split(" ");
//    let longestWord = strArr[0]
//   for(let i=0;i<strArr.length;i++){
//     if(strArr[i].length > longestWord.length){
//       longestWord = strArr[i];
//      }
//    }
//    return longestWord;
// }
//  console.log(findlongestWord(str));

// implement a function generatehash that generates a hashtagfrom a given input string
// let str = "india is seventh largest country"
// const generateHash = () =>{
//     if(str.length>280 && str.trim().length===0){
//         return false;
//     }
//     let wordArr = str.split(" ");
//     wordArr = `#${wordArr.map((curelem) => curelem.replace(curelem[0],curelem[0].toUpperCase())).join("")}`;
//     return wordArr;

// }
// console.log(generateHash(str));

// let nums = [2,2,1] // output = 1
// function singleNumber(){
//     let single ;
//    for(let i=0;i<nums.length;i++){
//     let foundDuplicate = false;
//     for(let j=0;j<nums.length;j++){
//         if(i!==j && nums[i] === nums[j]){
//             foundDuplicate = true;
//             break;  
//         }
//     }
//     if(!foundDuplicate){
//         single = nums[i]
//     }
//    }
//    return single;
// }
// console.log(singleNumber(nums));

// let nums = [2,2,1,3]
// function singleNumber(nums){
//     let obj = {};
//     for(let i of nums){
//       obj[i] = (obj[i]|| 0 ) + 1;
//     }
//     let arr = []
//     for(let key in obj){
//         if(obj[key] === 1){
//            arr.push(parseInt(key))
//         }
//     }
//     return arr;
// }
// console.log(singleNumber(nums));

// let nums = [2,2,1,3]
// function singleNumber(nums){
//     let obj = {}
//     let result = []
//     for(let i of nums){
//         obj[i] = (obj[i] || 0) + 1
//         if(obj[i] > 1){
//             result.push(obj[i])
//         }
//     }
//     return result;
// }
// console.log(singleNumber(nums))
// let arr = [2,3,5,2,6,2,7,8,2] , target =2; // output =4
// function countNum(arr,target){
//     let count = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//            count++;
           
//         }
//     }
//     return count;
// }
// console.log(countNum(arr,target));

// write a function called countchar that takes two parameter string and a character to count . the function should return number 
//of times specified character appears in the string
// let word = "MissIssippi" , char = "I"
// function countchar(){
//    word = word.toLowerCase().split("");
//    char = char.toLowerCase();
//    let count = 0;
//    for(let i=0;i<word.length;i++){
//     if(word[i] === char){
//         count++;
//     }
//    }
//    return count;
// }
// console.log(countchar(word,char));
// let a=3,b=3,c=8
// function checkTriangletype(a,b,c){
// if(a===b && b ===c){
//     return "eqilateral";
// }
//  else if(a!==b && b!==c && a!==c){
//     return "scalene"
//  }
//  return "Isosceles";
// }
// console.log(checkTriangletype(a,b,c))
// let arr = [5,3,1,8]
// function ascendingSort(){
// let minnum ;
// let sortedArray = [];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//     if(arr[j]> minnum){
//        arr[j] = minnum
//     }
// }
// }
// return sortedArray.push(minnum);
// }
// console.log(ascendingSort(arr))
// let arr = [5,3,1,8]
// function ascendingSort(arr){
//    let n = arr.length;
//    for(let i=0;i<n;i++){
//     for(let j=0;j<n-i-1;j++){
//         if(arr[j] > arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         }
//     }
//    }
//    return arr;
// }
// console.log(ascendingSort(arr))
// let str = "Hello"
// function countAlloccurence(str){
//     let obj = {};
//     for(let char of str){
//         if(obj[char]){
//             obj[char]++;
//         }
//         else{
//             obj[char] = 1;
//         }
//     }
//     return obj;
// }
// console.log(countAlloccurence(str));
// let str = "Hello"
// function countAlloccurence(str){
//     let obj = {}
//     for(let char of str){
//         obj[char] = (obj[char] || 0) + 1
//     }
//     return obj;
// }
// console.log(countAlloccurence(str))

// let str = "Hello", char = "l"
// function countAlloccurence(){
//     let count = 0;
//     let str1 = str.split("");
//     for(let i=0;i<str1.length;i++){
//     if(str1[i] === char){
//         count++;
//     }
// }
// return count;
// }
// console.log(countAlloccurence(str,char))

// let str = "racecar";
// function palindromeString(str){
//     return str === str.toLowerCase().split("").reverse().join("");
// }   
// console.log(palindromeString(str));
 
// let arr = [5,7,9,3,2]
// function maxinArr(){
//     return Math.max(...arr)
// }
// console.log(maxinArr(arr));

// let l1 = [2,4,3], l2 = [5,6,4]

// function addTwonumber(l1,l2){
//     //  let sum = parseInt(l1.reverse().join("")) + parseInt(l2.reverse().join(""));
//      return Array.from(String(parseInt(l1.reverse().join("")) + parseInt(l2.reverse().join(""))),Number).reverse();
// }
// console.log(addTwonumber(l1,l2));

// let arr = [1,2,3,1,2,3,2,2] // output = [1,2,3] length =3
//  function findingDuplicates(arr){
//     let arr1 = []
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 arr1.push(arr[i])
//             }
//         }
//     }
//     return arr1;
//  }
// console.log(findingDuplicates(arr));
// function findingDuplicates(arr2) {
//     let arr1 = [];
//     for(let i = 0; i < arr2.length; i++) {
//         for(let j = i + 1; j < arr2.length; j++) {
//             if(arr2[i] === arr2[j] && !arr1.includes(arr2[i])) {
//                 arr1.push(arr2[i]);
//             }
//         }
//     }
//     return {
//         duplicates:arr1,
//         length:arr1.length
//     };
// }

// const arr2 = [1, 2, 3, 1, 2, 3, 2, 2];
// console.log(findingDuplicates(arr2)); // Output: [1, 2, 3]

// const obj = {
//     "1": "a",
//     1: "b",
//     [1]: "c"
// }
// console.log(obj["1"])

// async function check(){
//     await Promise.resolve(console.log(1));
//     console.log(2)     // 3142
// }
// console.log(3);
// check();
// console.log(4)
// let str = "Hello World"
// function countVowels(){
//     let vowels = ["a","e","i","o","u"]
//     let count = 0
//      let str1 = str.toLowerCase().split("");
//    for(let char of str1){
//     if(vowels.includes(char)){
//         count++
//     }
//    }

//    return count;
// }

// console.log(countVowels(str));

// let str = "Hello World";

// function countVowels(str) {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     let str1 = str.toLowerCase().split("");
//     for (let i = 0; i < str1.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;   
//         }
//     }
//     return count;
    
// }
// console.log(countVowels(str));

// let arr = [0,1,1,0,1,0,1,0,1,1,0]
// function sortNum (arr){
//  let countNum = 0;
//  for(let i=0;i<arr.length;i++){
//     if(arr[i] === 0){
//         countNum++;
//     }
//  }
//     for(let i=0;i<arr.length;i++){
//         if(i<countNum){
//             arr[i] = 0;
//         }
//         else {
//             arr[i] = 1;
//         }
//     }
//     return arr;
// }
// console.log(sortNum(arr))
// let arr = [0,1,1,0,1,0,1,0,1,1,0]
// function sortNum(arr){
//     arr.sort((a,b) => {
//         if(b===0,a==!0){
//             return 1
//         }
//         else if (b!==0,a===0){
//             return -1
//         }
//         else{
//             return 0
//         }
//     })
//     return arr
// }
// console.log(sortNum(arr));

// let arr = [1,2,3,4,5,6,7,8,9]  // output [9,7,5,3,1,2,4,6,8]
// function sortByEvenOdd (){
//     let arr1 = [];
//     let arr2 = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2 !== 0){
//             arr1.push(arr[i])
//              arr1.sort((a,b) => b-a);
//         }
//         else {
//             arr2.push(arr[i])
//         }
//     }
//     return [...arr1,...arr2]
// }
// console.log(sortByEvenOdd(arr));
// let arr = [1,2,3,4,5,6,7,8,9]
// function sortByEvenOdd(arr){
//     arr.sort((a,b) => {
//         if(b%2 ===0, a%2===0){
//             return 1
//         }
//         else if(b%2 !==0,a%2 !==0){
//             return -1
//         }
//         else {
//             return 0
//         }
//     })
//     return arr
// }
// console.log(sortByEvenOdd(arr))

// let arr = [1,2,3]
// function sumOfSqures(arr){
//     let sum = 0;
//    for(let i=0;i<arr.length;i++){
//       sum = sum + arr[i]*arr[i]
//    }
//    return sum;
// }
// console.log(sumOfSqures(arr));

// let arr = [1,2,3]

// function sumOfSqures(arr){
//     return arr.reduce((accum,currelement) => accum = accum+currelement*currelement,0)
// }
// console.log(sumOfSqures(arr));

// const x = [1,2,3]
// x[-1] = -1;
// console.log(x)

// let str = "racearace";

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }
// function longestPalindrome(str) {
//   let longest = '';
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       let substr = str.substring(i, j);
//       if (isPalindrome(substr) && substr.length > longest.length) {
//         longest = substr;
//       }
//     }
//   }
//   return longest;
// }
// console.log(longestPalindrome(str));  // output: ara

// let str = "hello world"
// function toSnakeCase(str){
// let str1 = str.split(" ").join("_")
// return str1
// }
// console.log(toSnakeCase(str));

// let str = "hello world thaPa"

// function toCamelCase(str){
  
// }
// console.log(toCamelCase(str));

// let words = ["geeksforgeeks", "geeks", "geek", "geezer"]
// function longestCommonPrefix(words) {
//     if (words.length === 0) return '';
//     let prefix = words[0];
//     for (let i = 1; i < words.length; i++) {
//         for (let j = 0; j < prefix.length; j++) {
//             if (prefix[j] !== words[i][j]) {
//                 prefix = prefix.slice(0, j);
//                 break;
//             }
//         }
//     }
//     return prefix;
// }

// console.log(longestCommonPrefix(words));

// let str = "hello";
// function revStr(str){
// //     let str1 = "";
// //    for(let i=str.length-1;i>=0;i--){
// //      str1 = str1 + str[i]
// //    }
// //    return str1;
// // }
// return str.split("").reverse().join("");
// }
// console.log(revStr(str));

// console.log([] == [])  //false
// console.log([] === [])  //false
// console.log([] ==! [])  // true

// let str = "hello world saurABh"; // output = helloWorldSaurabh
// function toCamelCase(str){
//   let str1 = str.split(" ");
// str1 = str1.map((curelem,index)=> {
//     if(index === 0){
//         return curelem.toLowerCase();
//     }
//     else {
//         return curelem.charAt(0).toUpperCase() + curelem.slice(1).toLowerCase();
//     }
// })
// return str1.join("");
  
// }
// console.log(toCamelCase(str));

// let str = "hello world sauraBh"
// function toCamelCase(str){
//     let str1 = str.split(" ");
//     let camelcaseStr = "";
//     for(let i=0;i<str1.length;i++){
//         if(i ===0){
//             camelcaseStr = camelcaseStr+ str1[i].toLowerCase();
//             // console.log(camelcaseStr);
//         }else {
//             camelcaseStr = camelcaseStr+ str1[i].charAt(0).toUpperCase() + str1[i].slice(1).toLowerCase();
            
//         }
//     }
//     return camelcaseStr;
// }
// console.log(toCamelCase(str))

// let arr = [2,4,6,10]  // output 8
// function missingNum(arr){
//    let Expectedsum = ((arr.length+1)*(arr[0]+arr[arr.length-1]))/2;  // 
//    let realSum = 0;
//    for(let i=0;i<arr.length;i++){   // 
//      realSum = realSum + arr[i];  // 
//    }
//    let missingnum = Expectedsum - realSum;
//    return missingnum;
// }
// console.log(missingNum(arr));

// let arr = [1,1,0,1,1,1] , target = 1 // [0,1,1,1,1,1]
// function findOccurenceOfOne(arr,target){
    
//     let count = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//            count++;
    
//         }
//         else {
//             count = 0;
//         }
//     }
//     return count;
// }
// console.log(findOccurenceOfOne(arr,target));

// let arr = [3,1,-2,-5,2,-4]  // output
// function rearrangeArray(arr){
//    let arr1 = []
//    let arr2 = []
//    for(let i=0;i<arr.length;i++){
//       if(arr[i] < 0){
//         arr1.push(arr[i]);
//       }else {
//         arr2.push(arr[i])
//       }
//    }
//    return [...arr1,...arr2]
// }
// console.log(rearrangeArray(arr))
// let nums = [2,0,2,1,1,0]   // output [0,0,1,1,2,2]
// var sortColors = function(nums) {
//     let arr1 = []
//     let arr2 = []
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] < 1){
//             arr1.push(nums[i])
//         }else {
//             arr2.push(nums[i])
//             arr2.sort((a,b) => a-b)
//         }
//     }
//     let mergeArr = [...arr1,...arr2]
//     return mergeArr
// };
// console.log(sortColors(nums))

// let arr = [1,2,2,3,1,4,2]
// function countAlloccurence(){
//     let obj = {}
    
//     for(let i of arr){
//         if(obj[i]){
//             obj[i]++
//         }
//         else {
//             obj[i] = 1;
//         }
//     }
//     return obj;
// }
// console.log(countAlloccurence(arr));

// let arr = [1,2,2,3,1,4,2]
// function countAlloccurence(arr){
//     let max = 0;
//     let mode;
//     let obj = {};
//     for(let i of arr){
//         obj[i] = (obj[i] || 0) + 1
//         if(obj[i] > max){
//             max = i
//             mode = max;
//         }
//     }
//     return mode;
// }
// console.log(countAlloccurence(arr))

// let str = "hello"
// function countAlloccurence(str){
//     let obj = {}
//     for(let char of str){
//    obj[char] = (obj[char] || 0) + 1
//     }
//     return obj;
// }
// console.log(countAlloccurence(str));


// function fibonnaciSeries(num){
//     if(num <= 1 ){
//         return num;
//     }else {
//         return fibonnaciSeries(num-1) + fibonnaciSeries(num-2);
//     }
// }
// console.log(fibonnaciSeries(7));


// let arr = [1,1,2,2,4,4,7,9,9]
// function singleValue(arr){
//      let result = 0;
//      for(let i=0;i<arr.length;i++){
//         result = result^arr[i];
//      }
//      return result;
// }
// console.log(singleValue(arr))

// let arr = [1,1,2,2,4,4,7,9,9]
// function findSingleValue(arr){
// let count = {}, num;

//   for(let i of arr){
//     count[i] = (count[i] || 0) + 1;
    
//   }
//   for (let key in count){
//     if(count[key] === 1) {
//       num = key;
//     }
//   }
//   return num;
// }
// console.log(findSingleValue(arr))

// let arr = [-2,-1,-3,4,-1,2,1,-5,4]
// function maxSumSubarray(arr){
// let sum =0;
// let maxsum = arr[0]
// for(let i=0;i<arr.length;i++){
//     sum = Math.max(sum + arr[i],arr[i]);
//     maxsum  = Math.max(sum,maxsum)
    
// }
// return maxsum;
// }
// console.log(maxSumSubarray(arr))

// let arr = [-2,-1,-3,4,-1,2,1,-5,4]
// function maxSumSubarray(arr){
//    let sum = 0;
//    let maxsum = 0;
//    let startIndex = 0;
//    let endIndex = 0;
//    let maxsubarray = []
//    for(let i=0,tempIndex = 0;i<arr.length;i++){
//        if(arr[i] > sum + arr[i]){
//          tempIndex = i;
//          sum = arr[i]
//        } else {
//          sum = sum + arr[i]
//        } 
//    if (sum > maxsum){
//     maxsum = sum;
//      startIndex = tempIndex
//      endIndex = i;
//    }
// }
//    maxsubarray = arr.slice(startIndex,endIndex+1)
//    return maxsubarray;
// }
// console.log(maxSumSubarray(arr))

// function doSomething(){
//     return
//     {
//         sucess : true
//     };
// }
// console.log(doSomething());  // undefined

// let arr1 =  [1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 1, 2];
// function leastOccurence(arr){
//     let obj = {};
//     let mincount = Infinity;
//     let minnum;
//     for(let count of arr1){
//         obj[count] = (obj[count] || 0) + 1
//     }
//     for(let key in obj){
//          if(obj[key] < mincount){
//             mincount = obj[key]
//              minnum = parseInt;
//             //  console.log(minnum)
             
//          }
//     }
//     return minnum;
// }
// console.log(leastOccurence(arr1))

// let arr =  [1,3,3,4,5,7,8,9];
// function mostOccurence(arr){
//     let obj = {};
//     let maxcount;
//     let maxnum = -Infinity;
//   for(let count of arr){
//     obj[count] = (obj[count] || 0) + 1;
//   }
//   for(let key in obj){
//    if(obj[key] > maxnum){
//     maxnum = obj[key];
//     maxcount = parseInt(key);
//    }
//   }
//   return maxcount;
// }
// console.log(mostOccurence(arr))

// let arr = [2,5,6,3,9,5] , steps = 2;
// function rotateArray(arr,steps){
//    let effectiveSteps  = (steps)% arr.length;  // 2
//    let rotatedArray = [];
//    for(let i=0;i<arr.length;i++){
//     let index = (i+effectiveSteps)%arr.length;  // 2
//     rotatedArray[index] = arr[i];
//    }
//    return rotatedArray;
// }
// console.log(rotateArray(arr));

// let arr = [2,5,6,3,9,5] , steps = 2
// function rotateArray(arr,steps){
//     let rotatedArray = []
//    for(let i=0;i<arr.length;i++){
//        let index = (i+steps)% arr.length;
//        console.log(index)
//        rotatedArray[index] = arr[i];
//    }
//    return rotatedArray;
// }
// console.log(rotateArray(arr,steps))


// function passwordValidator(password){
//     let hasUppercase = false;
//     let hasLowercase = false;
//     let hasNumber = false;
//   for(let char of password){
//     if(char.charCodeAt(0)>=65 && char.charCodeAt(0) <=90){
//         hasUppercase = true;
//     }
//     else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122){
//          hasLowercase = true;
//     }
//     else if(!isNaN(Number(char))){
//         hasNumber = true;
//     }
//   }
//   if(!hasUppercase || !hasLowercase || !hasNumber || password.length<8){
//     return false;
//   }
//   return true;
// }
// console.log(passwordValidator("aKfgh7Hj"))
// console.log(passwordValidator("akfgh7hi"))

// let arr = [1,2,3,4,4]
// function findDuplicate(arr){
//     // let duplicates = new Set(arr);
//     // return duplicates;
//     // let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
//     let duplicates = arr.reduce((accu,curelement) => {
//         if(arr.indexOf(curelement)!== arr.lastIndexOf(curelement) && !accu.includes(curelement)){
//            accu.push(curelement)
//         }
//         return accu;
    
//     },[])
//     return duplicates;
// }
// console.log(findDuplicate(arr))

// let str = "asdfghxyz" ,ch = "h"; // output = hgfdsaxyz
// const revStr = (str,ch) =>{
//   let index = str.indexOf(ch);
// //   console.log(index)
// let subString = str.substring(0,index+1);
//  let reverseSubstring = subString.split("").reverse().join("");
//  return reverseSubstring+ str.substring(index +1);
// }
// console.log(revStr(str,ch))

// let arr = [1,2,3,4,5] , sum = 5;
// function pairSum(arr){
//    let sum1 = []
//    for(let i=0;i<arr.length;i++){
//       if(arr[i]+ arr[i+1] === sum){  // check adjacent only
//         sum1.push(arr[i],arr[i+1])
//       }
//    }
//    return sum1;
// }
// console.log(pairSum(arr));

// let arr = [1,2,3,4,5], target = 5
// function pairSum(arr,target){
//   let result = []
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] + arr[j] === target){
//             result.push([arr[i],arr[j]])
//         }
//     }
//   }
//   return result;
// }
// console.log(pairSum(arr,target))

// let arr = [[[[1],2,[3,4]]]]
// function flattenArr(arr){
//     let arr1 = []
//    arr.forEach((element) => {
//        if(Array.isArray(element)){
//            arr1 = arr1.concat(flattenArr(element))
//        }
//        else{
//            arr1.push(element)
//        }
//    }) 
//    return arr1;
// }
// console.log(flattenArr(arr))
// let arr = [[[[1],2,[3,4]]]]
// function flattenArr(arr){
//     let result = []
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//            result = result.concat(flattenArr(arr[i]));
//         }
//         else {
//           result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(flattenArr(arr))

// // grouping data
// let obj = {}

// let output = {}

// obj.forEach(element => {
//     if(output[element.key]){
//       // key is available
//       output[element.key].push(element)
//     }
//     else{
//         output[element.key] = [element]
//     }
// });
// console.log(output);

// function foo(){
//     var x = 10;
//     console.log(x)  // reference error
// }
// foo();
// console.log(x)
// const x = 20  // using var let const gives 20,20
//  function foo(){
//     // var x = 10;
//     console.log(x)  // reference error
//  }
//  foo();
//  console.log(x)

// {
//     let a = 1;
//     let b = 2
//     console.log(a)  // reference error
//     console.log(b)
// }
// console.log(a)
// console.log(b)
// console.log(a)
// let a = 5;  //  reference error
// var b = 5   // undefined

//  let arr = [1,2,3,4,5]
// let size = 2
// function chunk(arr,size){
// let result = []
// let ans = []
//     for(let i=0;i<arr.length;i++){
//     ans.push(arr[i])
//        if(ans.length === size || i===arr.length-1){
//          result.push([...ans])
//          ans.length = 0
//        }
//     }
//     return result;
// }
// console.log(chunk(arr,size))

// let obj = [{}]

//  const data = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 1, name: 'Alice' },
//     { id: 3, name: 'Charlie' },
//     { id: 2, name: 'Bob' }
//   ];

//   function removeDuplicates(array, key) {
//     const result = {} ;
//     const uniqueArray = [];
  
//     for (let item of array) {
//      result[item[key]] =  (result[item[key]] || 0) + 1
//   }
//   for(let item of array){
//      if(result[item[key]] > 1){
//       uniqueArray.push(item)
//       result[item[key]] = []
//      }
//   }
//   return uniqueArray;
//   }
//   console.log(removeDuplicates(data,'id'));

// let data = [
//     { id: 1, name: 'Alice', age: 20 },
//     { id: 2, name: 'Bob', age: 26 },
//     { id: 1, name: 'Alice', age: 22 },
//     { id: 3, name: 'Charlie', age: 32 },
//     { id: 2, name: 'Bob', age: 24 }
//   ];
     
// data.sort((a, b) => {
//     return a.id - b.id || a.age - b.age || a.name.localeCompare(b.name);
//   });
  
//   data.sort((a,b) => {
//   if(a.id !== b.id){
//     return a.id - b.id
//   }
//   if(a.age !== b.age){
//     return a.age - b.age
//   }
//   if(a.name !== b.name){
//   return a.name.localcompare(b.name)
//   }
//   return 0;
//   })
//   console.log(data)
  
// function isValid(s){
//     let obj = {
//      '{' : '}',
//      '[' : ']',
//      '(' : ')' 
//     }
//     let result = []
//     for(let char of s){
//     if(char === '{' || char === '[' || char === '('){
//     result.push(char)
//     }
//     else {
//     let top = result.pop();
//     if(obj[top] !== char){
//     return false;
//     }
//     }
//     }
//     return result.length === 0;
//   }
//   console.log(isValid('[{})]'))

// function filterOddNumbers(arr) {
//     if (arr.length === 0) {
//       return [];
//     }
//     const [first, ...rest] = arr;
//     if (first % 2 !== 0) {
//       return [first, ...filterOddNumbers(rest)];
//     } else {
//       return filterOddNumbers(rest);
//     }
//   }
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   console.log(filterOddNumbers(numbers));

// console.log(false==[]);  // true
// console.log(false ==![])  // true

// let arr1 = [
//     { "employeeId": "1", "location": "Bangalore" },
//     { "employeeId": "2", "location": "Mumbai" },
//     { "employeeId": "3", "location": "Delhi" }
// ];
// let arr2 = [
//     { "employeeId": "1", "name": "John Doe" },
//     { "employeeId": "2", "name": "Jane Smith" },
//     { "employeeId": "3", "name": "Mike Johnson" }
// ];
// function mergeArr(arr1,arr2){
//     let result = []
//     for(let i=0;i<arr1.length;i++){
//         let item1 = arr1[i]
    
//     for(let j=0;j<arr2.length;j++){
//         let item2 = arr2[j]
    
//     if(item1.employeeId === item2.employeeId){
//         result.push({
//             employeeId : item1.employeeId,
//             location : item1.location,
//             name : item2.name
//         })
//     }
//     }
//     }
//     return result;
// }
// console.log(mergeArr(arr1,arr2))

// let arr1 = [
//     { "employeeId": "1", "location": "Bangalore" },
//     { "employeeId": "2", "location": "Mumbai" },
//     { "employeeId": "3", "location": "Delhi" }
// ];
// let arr2 = [
//     { "employeeId": "1", "name": "John Doe" },
//     { "employeeId": "2", "name": "Jane Smith" },
//     { "employeeId": "3", "name": "Mike Johnson" }
// ];
// function mergeArr(arr1,arr2){
// let result = [];
// for (let i = 0; i < arr1.length; i++) {
//     let item1 = arr1[i];
//     for (let j = 0; j < arr2.length; j++) {
//         let item2 = arr2[j];
//         if (item1.employeeId === item2.employeeId) {
//             result.push({
//                 employeeId: item1.employeeId,
//                 location: item1.location,
//                 name: item2.name
//             });
//         }
//     }
// }
// return result;
// }
// console.log(mergeArr(arr1,arr2));

// let arr = [1, 0, 1, 0, 0, 1, 1, 1, 0];
// let k = 2;

// function countSubArraywithSumK(arr,k){
// let result = []
// let count = 0;

// for(let i=0;i<arr.length;i++){
// let currentSum = 0;

// for(let j=i;j<arr.length;j++){
// currentSum = currentSum + arr[j]
// if(currentSum === k){
// result.push(arr.slice(i,j+1))
// count++;
// }
// }
// }
// console.log(count)
// return result;
// }
// console.log(countSubArraywithSumK(arr,k))

// let words = ["listen", "silent", "enlist", "google", "gooegl", "inlets", "banana"];
// function removeAnagrams(words){
//     let obj = {}
//     let result = []
//    for(let i=0;i<words.length;i++){
//     let sortedWords = words[i].split('').sort().join('');
//     //   if(obj[sortedWords] === undefined){
//     //       obj[sortedWords] = false;
//     //       result.push(words[i])
//          if(!obj[sortedWords]){
//             obj[sortedWords] = true;
//             result.push(words[i])
//       }
//    }
//    return result;
// }
// console.log(removeAnagrams(words));

// let words = ["listen", "silent", "enlist", "google", "gooegl", "inlets", "banana"];
// function removeAnagrams(words){
//   let result = []
// //   result.push(words[0])
//    for(let i=0;i<words.length-1;i++){
//     let curr = words[i].split('').sort().join('');
//     let next = words[i+1].split('').sort().join('');
//     if(curr !== next){
//         result.push(words[i+1])
//     }
//    }
//    return result;
// }
// console.log(removeAnagrams(words))



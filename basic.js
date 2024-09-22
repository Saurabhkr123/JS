// let arr = [3,5,9,0,-2,-4]
// function maxmInarr (arr) {
//     let maxnumber = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > maxnumber){
//             maxnumber = arr[i]
//         }
       
//     }
//     return maxnumber;
// }
// console.log(maxmInarr(arr));

// let str = "abcdcba"
// function isPalindrome(str){
//     let newstr = "";
//     newstr = str.split("").reverse().join("")
//   if(str === newstr){
//     return true;
//   }
//   return false;
    
// }
// console.log(palindrome(str));
// let str = "abcdcba"
// function isPalindrome (str){
//     return str === str.split("").reverse().join("")
// }
// console.log(isPalindrome(str));
// let arr = [5,7,4,2,-3,-5]
// let smallestNum = (arr)  =>  {
//   let smallNum = arr[0];
//   for(let i=0;i<arr.length;i++){
//     if(arr[i] < smallNum){
//      smallNum = arr[i]
//     }
//   }
//   return smallNum;
// }
// console.log(smallestNum(arr));
// let nums = [3,2,4] , target = 6
// function twoSum (nums,target){
//     let arr1 = [];
//    for(let i=0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//         if(nums[i]+nums[j] === target){
//             arr1.push([i,j])
//         }
//     }
//    }
//    return arr1.flat();
// }
// console.log(twoSum(nums,target))

//  let arr = [4,6,11,2,7] , target = 13

// function twoSum (arr,target){
//    for(let i=0;i<arr.length;i++){
//     let difference = target - arr[i];
//     if(arr.includes(difference) && difference !== arr[i]){
//         return[arr[i],difference]
//     }
//    }
// }
// console.log(twoSum(arr,target));

// let str = "hello world"   // hello_world

// function toSnakeCase (str){
//   return str.split(" ").join("_");
// }
// console.log(toSnakeCase(str));



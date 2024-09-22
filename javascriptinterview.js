//(1)  difference between map and foreach
// const array = ['2','5','7','10'] // output = [ '22', '52', '72', '102' ] or undefined for foreach
// const array = [2,5,7,10]

// const arrayResult =  array.map((arr) => { // [ 4, 7, 9, 12 ]
//    return arr+2;
// });
// // const mapResult = array.map((arr) => { // [ 4, 7, 9, 12 ]
// //       return arr+2;
// //      }).filter();

// const forEachResult = array.forEach((arr) => { // undefined
//     return arr+2;
//  });

//  const forEachResult = array.forEach((ar,i) => { // undefined
//     array[i] = ar+2;
//  });


//  console.log(arrayResult);
//  console.log(forEachResult,array);  

 //(2) null vs undefined
//  console.log(typeof(null));
//  console.log(typeof(undefined));

//  console.log(null==undefined); // true
//  console.log(null===undefined); // false

 // Event Delegation


 // Flatten the array

//  let arr = [[
//    [1,2],
//    [3,4],
//    [5,6,7,8,9],
//    [10,11,12]
//  ]
//  ];

//  let flattened = [].concat(...arr);
//  console.log(flattened);
// console.log(arr.flat(2));

// var vs let vs const

// let i  = 10;
// {
//    let i = 5;
   
// }
// console.log(i);

// setTimeout output

// explain call,apply,bind

// Infinite currying
// add(1)(2)....(n)()
// composition polyfill


//   const nums = [1,3,-1,-3,5,3,6,7], k=3
// output = [3,3,5,5,6,7]
// const sortedArr = input1.sort((a,b) => a-b); //[11,7,2,1,1,-2]
// const secondLargest = sortedArr[1];

// const findMaxm = (nums,k) => {
//    const result = [];
//    const n = nums.length; // 8
//    for(let i=0;i<=n-k;i++){
//        let max = nums[i]; // 1
//       for(let j=0;j<k;j++){  
//        if(nums[i+j] > max){
//          max = nums[i+j];
      
//        }
//       }
//       result.push(max);
//    }
//    return result;
// }
// console.log(findMaxm([1,3,-1,-3,5,3,6,7], k=3));



// function factorial(n){
//    if(n===1 || n===0){
//       return 1;
//    }
//    return n*factorial(n-1);
// }
// console.log(factorial(5));

// function sumOfDigits(num){
//    let sum = 0;
//    let digits = num.toString().split('');
   
//    for(let i = 0;i <digits.length;i++){
//       sum = sum + parseInt(digits[i]);
//    }
//    if(sum > 9){
//       return sumOfDigits(sum);
//    }
//    else {
//       return sum;
//    }
// }
// console.log(sumOfDigits(54321));

// function factOfNumber(n){
//    if(n===0 || n===1){
//       return 1;
//    }
//    return n*factOfNumber(n-1);
// }
// console.log(factOfNumber(5));

// function isPrime(n){
//    if(n <=1){
//       return false;
//    }
//    for(let i=2;i<=Math.sqrt(n);i++){
//       if(n%i === 0){
//          return false;
//       }
//    }
//    return true;
// }
// console.log(isPrime(4));

// function revNum(num){
//    let str = num.toString();
//    console.log(str);
//     let  numStr = str.split('').reverse().join('');
//     console.log(numStr);
//     let reversenum = parseInt(numStr);
//     console.log(reversenum);
//     return reversenum;
// }
// console.log(revNum(153));

// var score = 8; // midlevel value = true

// console.log("midlevel Value = " , score>0 &&  score<11);

// function addTwoNumber(l1,l2){
//     let revArrl1 = l1.toString();
//     let revArr1 = revArrl1.split('').reverse().join('');
//     let revArrl2 = l1.toString();
//     let revArr2 = revArrl2.split('').reverse().join(''); 
//     return revArr1,revArr2;
    
// }
// const l1 = [2,4,3];
// const l2 = [5,6,4];
// console.log(addTwoNumber(l1,l2));

// function missingNumber(arr){
//     let arrsum =0;
//     let sortedarr = arr.sort((a,b)=> b-a);
//     let n = sortedarr[0];
//     let actualSum = (n*(n+1))/2;
//     for(let i=0;i<arr.length;i++){
//         arrsum = arrsum + arr[i];
//     }
//     const missingNumber = actualSum - arrsum;
//     return missingNumber;
// }
// const arr = [1,2,3,4,5,6,8,9]
// console.log(missingNumber(arr));
 
//....................................
// This keyword
//   There are two way to object binding 
//   Implicit and explicit(call,apply and bind)
//    this.a = 5;
//     const getParam = () =>{
//    console.log(this.a);
//    };
//    getParam();
// console.log(this.a);
  
// let user = {
// name: "piyush",
// age: 24,
// getDetails() {
//     console.log(this.name);
// }
// }
// user.getDetails();
// let user = {
//     name: "piyush",
//     age: 24,
//     childobj: {
//         newName: "Roadside coder",
//     getDetails() {
//         console.log(this.newName,"and",this.name);
//     },
//     },
// };
//     user.childobj.getDetails();
// let user = {
//     name: "piyush",
//     age: 24,
//     childobj: {
//         newName: "Roadside coder",
//     getDetails() {
//         console.log(this.newName,"and",this.name);
//     },
//     },
// };
//     user.childobj.getDetails();

// class user{
//     constructor(n){
//         this.name = n;
//     }
//     getName() {
//         console.log(this.name);
//     }
// }
// const User = new user("Piyush");
// User.getName();
// const user = {
//     firstName: "piyush!",
//     getName(){
//         const firstName = "Piyush!";
//     return this.firstName;
//     },
// };
// console.log(user.getName());
// const user = {
//     firstName: "piyush!",
//     getName(){
//         const firstName = "Piyush! Singh";
//     return this.firstName;
//     },
// };
// console.log(user.getName());

// function makeUser(){
//     return{
//         name:"John",
//         ref(){
//             return this;
//         },
//     };
// }
// let user = makeUser();
// console.log(user.ref().name);
// const user = {
//     name: "piyush agarwal",
//     logMessage(){
//         console.log(this.name);
//     }
// }
// setTimeout(function (){
//     user.logMessage();},1000);

// const input = [5,7,9,11,15,17]
// const firstMissingOdd = (input) => {
    
//     for(let i=0;i<input.length;i++){
        
//         let current = input[i];
//         let next = current+2;
//         if(!input.includes(next)){
         
//          return next;
//         }
//     }
    
// }
// console.log(firstMissingOdd(input));

// const input = [2,3,5,6,7,9,10]
// const firstMissingOdd = (input) => {
//     const missing = [];
//     for(let i=0;i<input.length;i++){
//         let current = input[i];
//         let next = current+1;
//          if(input[i+1] !== next){
//             missing.push(next);
//         }  
//     }
//     return missing;
// }
// console.log(firstMissingOdd(input));

// const input = [2,3,5,6,7,9,10]
// const rightSum = (input) => {
//     const sumright = [];
//     for(let i=0;i<input.length;i++){
//         let sum =0;
//         for(j=i+1;j<input.length;j++){
//             sum = sum + input[j];
            
//         }
//         if(sum !==0){
//             sumright.push(sum);
//         }
//     }
//     return sumright;
// }
// console.log(rightSum(input));

// let arr = [1,2,3];
// arr[5] = 5;
// console.log(arr);





// function factorial(num){
//     if(num === 0 || num === 1){
//         return 1;
//     }
//     else{
//         return factorial(num-1)*num
//     }
// }
// const result = factorial(5);
// const result1 = factorial(0)
//  console.log(result)
//  console.log(result1)

 


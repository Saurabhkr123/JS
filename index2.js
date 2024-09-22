// const input1 = {a:1,b:2,c:3,d:10,e:12}
// const input2 = {a:2,e:12,f:6,d:10}
// //const output = {d:10,e:12}

// function func(input1,input2){
//    let obj = {};
//    for(let i in input1) {
//       if (input1[i] === input2[i]) {
//           obj[i] = input1[i]
//       }
//    }
//    return obj;
// }
// console.log(func(input1,input2));

// function transposeMatrix(matrix){
//    const transposedMatrix = Array(matrix.length).fill(null).map(() =>Array(matrix[0].length));
//    for(let i=0;i<matrix.length;i++){
//       for(let j=0;j<matrix[0].length;j++){
//     transposedMatrix[j][i] = matrix[i][j];
//       }
//    }
//    return transposedMatrix;
// }
// const matrix = [
//    [1,2,3],
//    [4,5,6],
//    [7,8,9]
// ]
// const transposedMatrix = transposeMatrix(matrix);
// console.log(transposedMatrix);

// function isPalindrome(num) {
//    let str1  ="";
//    let reversenum = "";
//    let str2 = num.toString();
//     str1 = str2.split('').reverse().join('');
//     reversenum = parseInt(str1);
//     if(num===reversenum){
//       return true;
//     }
//     return false;
// }
// console.log(isPalindrome(121));
// var fib=function(n) {
//    if (n <= 0) {
//      return [];
//    } else if (n === 1) {
//      return [0];
//    } else if (n === 2) {
//      return [0, 1];
//    } else {
//      var series = fib(n - 1);
//      series.push(series[series.length - 1] + series[series.length - 2]);
//      return series;
//    }
//  }
//  console.log(fib(4));

// console.log(-4+3+"18");

// let otpGenerator = (digit) => {
//     let num = "0123456789";
//     let otp = "";
//     for(let i=1;i<=digit;i++){
//      otp = otp + num[Math.floor(Math.random()*10)]
//     }
//     return otp;
// }
// console.log(otpGenerator(4));

// if(true){
//     variable = 10;
// }
// console.log(variable);



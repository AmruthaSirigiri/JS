// function findPairsWithSum(array, targetSum) {
// var na=a.filter(function (ele){
//    return ele % 2 == 0;
// })
// var od=a.filter(function(ele1)
// {
//     return ele1 %2!=0;
// })
// }
// console.log("Even Array : "+na);
// console.log("Odd Array :  "+od);

// var a=[10, 20, 30, 40, 50],sum=0;
// for (let i = 0; i < a.length; i++) {
//     sum += a[i];    
// }
// console.log("Sum of Array element is : ",sum);

// function fun(a, t) {
//     const p=[];
//     const length=a.length;
//     for (let i=0;i<length;i++) {
//         for (let j=i+1;j<length;j++) {
//             if (a[i]+a[j]===t) {
//                 p.push(`Pair found: (${a[i]},${a[j]})`);
//             }
//         }
//     }
//     return p;
// }
// const a=[1, 5, 7, -1, 5];
// const t=6;
// const res=fun(a, t);
// res.forEach(pair => console.log(pair));

function armstrong(number, n) {
    let sum = 0;
    let temp = number;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, n);
        temp = Math.floor(temp / 10);
    }
    return sum === number;
}
function fa(n) {
    let start = Math.pow(10, n - 1);
    let end = Math.pow(10, n) - 1;
    let an = [];
    for (let i = start; i <= end; i++) {
        if (armstrong(i, n)) {
            an.push(i);
        }
    }
    return an;
}
let n = parseInt(prompt("Enter a Number: "));
if (isNaN(n) || n < 1) {
    console.log("Please enter a valid positive integer.");
} else {
    let an = fa(n);
    console.log(`All ${n} digit Armstrong numbers are: ${an.join(" ")}`);
}
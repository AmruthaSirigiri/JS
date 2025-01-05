// function table(n) {
//     var i=1
//     while(i<=10){
//         console.log(`${n}*${i}=${n*i}`)
//         i++
//     }
// }
// table(5)

// var evenPrint = function(){
//     var n=0;
//     do{
//         if(n%2==0){
//             console.log(n);
//         }
//         n+=2
//     } 
//     while(n<=20)
// }
// evenPrint()

// var n=15, num =1,i=1
// while (num<=15) {
//     console.log(num);    
//     num=num+i+1
//     i++
// }
// function ser(n) {
//     var num=1,i=1;
//     while (num<=n) {
//         console.log(num);    
//         num=num+i+1
//         i++
//     }
// }
// ser(15)

// function ser(n) {
//     var num=1,i=1;
//     do {
//         console.log(num);    
//         num=num+i+1
//         i++
//     } while (num<=n)
// }
// ser(15)

/* use for loop to print chars of given name in rev order
input: prasad, o/p: d a s a r p
*/
// function printRev(str) {
//     for (let i = str.length-1; i >= 0 ; i--) {
//         console.log(str.charAt(i));
//     }
// }
// printRev("Amrutha")

// use for loop to print odd numbers from 1 to 20 in rev order

// function oddPrint(num) {
//     for (let i = num; i >= 0 ; i--) {
//         if(i%2!=0){
//             console.log(i);            
//         }
//     }
// }
// oddPrint(20)

// 2, 3, 5, 8, 13

// function ser(n) {
//     for (let i = 1; i <=n; i++) {
//         console.log(i);
//         let sum=sum+i
//         console.log(sum);        
//     }
// }
// ser(20)
// var arr=[5,6,7,8]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);     
// }
// // for..of
// for(var i of arr){
//     console.log(i);
// }
// for(var i in arr){
//     console.log(i);
// }
// for(var i in arr){
//     console.log(arr[i]);
// }
// var f=["chandler","rachel","monica","ross","pheobe","joey"]
// for (let i = 0; i < f.length; i++) {
//     console.log(i.charAt(i));
// }
// for (var i of f) {
//     console.log(i.charAt(i));
// }
// for (const i in f) {
//     console.log(i.charAt(f[i]));
// }



// function table(n,i){
//     while(i<=10){
//         console.log(`${n} x ${i} = ${n*i}`);
//         i++;
//     }
// }
// var n=+prompt("N = ");
// var i=1;
// table(n,i);

// function sum(n){
//     var es=0,os=0;
//     if(n<0) console.log("Invalid Input");
//     while(n!=0){
//         if(n%2==0) es=es+n;
//         if(n%2!=0) os=os+n;
//         n--;
//     }
//     console.log("even sum => ",es);
//     console.log("odd sum => ",os);    
// }
// sum(10);
// sum(-10);

// function count(n){
//     if(n<0) console.log("negative number");
//     else if(n==0) console.log("zero");
//     else{
//         console.log(n.toString().length);        
//     }        
// }
// var n=+prompt("N = ");
// count(n);

// function revnum(n) {
//     // return parseInt(n.toString().split('').reverse().join(''));
//     var rev=0;
//     while(n!=0){
//         rev=rev*10+n%10;
//         n=Math.floor(n/10);

//     }
//     console.log("Reverse : ",rev);    
// }
// var n=+prompt("N = ");
// console.log(revnum(n));

function fact(n){
    if(n<0) console.log("Invalid input...Please enter a positive integer.");
    else if(n!=0){
        var r=1;
        // for(var i=2;i<=n;i++){
        //     r=r*i;
        // }
        var i=2;
        while(i<=n){
            r=r*i;
            i++;
        }
        console.log(`Factorial of ${n} = ${r}`);       
    }    
}
var n=+prompt("N = ");
console.log(fact(n));
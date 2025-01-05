//simple if
/*
if (condition) {
    //statements
}
*/
//write a function that prints/alerts success when username passed is javascript
//input: fun("javascript")
//success
// function display1(str){
//     if(str === "javascript"){
//         console.log("Success");
//         alert("Success")
//     }
// }
// display1("javascript")

// if-else
//DRY - Donn't Repeat Yourself
function evenodd(n) {
    if (n%2==0) {
        return "Even";
        
    } else {
        return "Odd";
    }
}
console.log(evenodd(25));
//WAT that accepets fullname and returns true if the last name is "patel", else it returns false
function fun(name) {
    if(name.endsWith("patel")){
        return true;
    }
    else{
        return false;
    }
}
console.log(fun("rama patel"))
// var n=fun("ammu patel")
// console.log(n);

function sumProduct(num) {
    var ld=num%10
    var fd=(num/10).toFixed()
    console.log("Sum = "+ +fd + ld);//unary+
    console.log("Product = "+ +fd * ld);    
}
sumProduct(23)

//if-else-if
function posNeg(num) {
    if(num>0) console.log("+Ve");
    else if(num<0) console.log("-Ve");
    else console.log("Zero");        
}
posNeg(5)
//Switch Case
function fun1(n) {
    switch (n) {
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        default:
            console.log("Not found");            
            break;
    }
}
fun1(2)
// function color(num) {
//     switch (num) {
//         case 1:
//             console.log("");            
//             break;
//         case 2:
//             console.log();            
//             break;
//         case 3:
//             console.log();            
//             break;
//         case 4:
//             console.log();            
//             break;
//         case 5:
//             console.log();            
//             break;
//         case 6:
//             console.log();
//             break;
//         case 7:
//             console.log();
//             break;  
//         default:
//             break;
//     }
// }
// color(6)
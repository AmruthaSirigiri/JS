function add(a,b) {
    return a+b;
}
console.log(add(2,3));

function max(a,b) {
    (a>b)&&console.log(`Max = ${a}`)||(a<b)&&console.log(`Max = ${b}`);
}
max(2,3);

function square(n) {
    return n*n;
}
square(5);
function even(num) {
    return num%2==0?"Even":"Odd";    
}
console.log(even(5));
function con(str1,str2) {
    return str1+" "+str2;
}
console.log(con("Amrutha","Sirigiri"));
function abso(num1) {
    // return -(num1);
    return Math.abs(num1);
}
console.log(abso(-3));
function mul(x,y) {
    return x*y;
}
console.log(mul(2,3));

function conv(f) {
    let c=(f-32)*5/9;
    return c;
}
console.log(conv(68));


function circle(r) {
    return Math.PI*r**2;
}
console.log(circle(2));

function sum(m) {
    return (m * (m + 1)) / 2;
}
console.log(sum(4));



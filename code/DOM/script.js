console.log(document);
var myData=document.getElementsByTagName('h1');
console.log(myData);

var myData2=document.getElementsByClassName('firstHead');//select by class name
console.log(myData2);

var myData3=document.getElementById('paragraph');//select bt Id name
console.log(myData3);

var myData4=document.querySelectorAll('.firstHead');//based on css class
console.log(myData4);

var myData5=document.querySelector('.firstHead');//select based on query by id but select first one by zero index
console.log(myData5);

var myData6=document.querySelector('.firstHead');
console.log(myData6.textContent);
myData6.textContent-"Hello Amrutha";
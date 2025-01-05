// Dom manipulation
// function change() {
//     var myEle=document.getElementById('head');
//     myEle.textContent="Hello Everyone! DOM Manipulation"
//     console.log(myEle);
// }
var v=0;
var c=document.getElementById("count");//query selecter
function incr(){
    v++;
    checkRange();
}

function decr(){
    v--;
    checkRange();
}

function checkRange(){
    if(v<0){
        alert("Number should no be less then zero");
    }
    else if(v<=20){
        c.textContent=v;
    }
    else{
        alert("Value should not be more the 20");
    }
}

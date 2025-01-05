var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var v=0;
var c=document.getElementById("count");
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
function reset() {
    v = 0;
    c.textContent = v; 
}
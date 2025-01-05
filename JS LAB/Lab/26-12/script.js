var v=0;
var c=document.getElementById('count');
function inc(){
    v++;
    checkRange();
}
function dec(){
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
function re(){
    c.textContent=0;
}


let feedback = document.getElementById('feedback');
function checkAnswer(answer){
    let correctAns = "option1";
    if(answer === correctAns){
        feedback.innerText = 'Correct!'
        feedback.style.color = 'green'
    }
    else{
        feedback.innerText = 'Wrong!'
        feedback.style.color = 'red'
    }
}
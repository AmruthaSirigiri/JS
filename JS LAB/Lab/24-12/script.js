let bnt=document.getElementById('bg');
bnt.addEventListener('click',() =>{
    document.body.style.backgroundColor="#"+Math.round(Math.random()*100000000).toString(16);
})

let ib=document.getElementById('i');
let p=document.getElementById('para');
ib.addEventListener('input',() =>{
    p.innerHTML=ib.value;
   // p.innerHTML=iv;
})

let srcimg=document.getElementById('img');
srcimg.addEventListener('mouseover',() =>{
    srcimg.src='./6.jpg';
})
srcimg.addEventListener('mouseout',() =>{
    srcimg.src='./7.jpg';
})

let s=document.getElementById('para1');
s.addEventListener('mouseover',() =>{
    s.style.fontSize='36px';
    s.style.color="#00698f"
})
s.addEventListener('mouseout',() =>{
    s.style.fontSize='24px';
    s.style.color="#666"
})

let text=document.getElementById('t');
text.addEventListener('copy',(e)=>{
    let ct='Modified text: '+text.value;
    e.ct.setData('text',ct);
    e.preventDefault(); //e.preventDefault() to prevent the default copy behavior and use our custom clipboard text instead.
})
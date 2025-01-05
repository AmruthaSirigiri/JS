document.getElementById('btn').addEventListener('click',fun)
let f=0;
function fun(){
    // $('#myDiv').hide()
    // $('#myDiv').slideUp()
    if(f==0){
        $('#myDiv').delay(1000).slideUp(1000)
        f=1;
    }
    else{
        $('#myDiv').slideDown(5000)
        $('#myDiv').text("Hiiiii")
        $('#myDiv').css('color',"white")
    }
}
//typed.js
var typed = new Typed('#myDiv', {
    strings: ["Web", "UI/UX"],
    typeSpeed: 500,
    loop: true,
    cursorChar:"😀",
});
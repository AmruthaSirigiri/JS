var mainDiv=document.getElementById('main');
// var a=1;
// function addData(){
//     var newPara=document.createElement('p');//<p></p>
//     newPara.textContent="Amrutha "+a++;//<p>Amrutha</p>
//     mainDiv.appendChild(newPara);
// }
// addData()

var mname=document.getElementById('mname');
var murl= document.getElementById('url');
var getMovie=function(){
    var mdiv=document.createElement('div');
    var mimg=document.createElement('img');
    mimg.src=murl.value;
    mimg.alt=mname.value;
    var mtitle=document.createElement('h2');
    mtitle.textContent=mname.value;
    mdiv.append(mimg,mtitle);
    mainDiv.appendChild(mdiv);
}

// var mainDiv = document.getElementById('main');
// var burl = document.getElementById('url');
// var bname = document.getElementById('bname');
// var aname = document.getElementById('aname');

// var getBook = function () {
//     var bdiv = document.createElement('div');
    
//     // Create and set image element
//     var bimg = document.createElement('img');
//     bimg.src = burl.value;
//     bimg.alt = bname.value;

//     // Create and set book title element
//     var btitle = document.createElement('h2');
//     btitle.textContent = bname.value;

//     // Create and set author element
//     var bauthor = document.createElement('p');
//     bauthor.textContent = "Author: " + aname.value;

//     // Append elements to the book div
//     bdiv.append(bimg, btitle, bauthor);

//     // Append the book div to the main container
//     mainDiv.appendChild(bdiv);
// };

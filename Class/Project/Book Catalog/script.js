var mainDiv = document.getElementById('main');
var burl = document.getElementById('url');
var bname = document.getElementById('bname');
var aname = document.getElementById('aname');
var bdesc = document.getElementById('bdesc');
var rating = document.getElementById('rating');

var getBook = function () {
    var bdiv = document.createElement('div');
    var bimg = document.createElement('img');
    bimg.src = burl.value;
    bimg.alt = bname.value;
    var btitle = document.createElement('h2');
    btitle.textContent = bname.value;
    var bauthor = document.createElement('p');
    bauthor.textContent = "Author: " + aname.value;
    var bdescription = document.createElement('p');
    bdescription.textContent = bdesc.value;
    var brating = document.createElement('p');
    brating.textContent = "Rating: " + "⭐".repeat(rating.value || 0);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => mainDiv.removeChild(bdiv);

    bdiv.append(bimg, btitle, bauthor, bdescription, brating, deleteButton);
    mainDiv.appendChild(bdiv);
}

var resetFields = function () {
    burl.value = '';
    bname.value = '';
    aname.value = '';
    bdesc.value = '';
    rating.value = '';
    mainDiv.innerHTML = '';
}

function changeRandom() {
    document.body.style.backgroundImage = `linear-gradient(to right, 
    #${Math.floor(Math.random() * 16777215).toString(16)}, 
    #${Math.floor(Math.random() * 16777215).toString(16)})`;
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
const mainDiv=document.getElementById('main');
function fetchData(){
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>displayData(data))
    .catch((err)=>console.log(err))
}
fetchData()
function displayData(products){
    // console.log(products);
    products.forEach((p)=>{
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');//div to add the class name
        const productTitle = document.createElement('h2');
        productTitle.textContent = p.title;
        const productPrice = document.createElement('p');
        productPrice.textContent="Price: ₹"+p.price;//ctrl+shift+$ ==>rs 
        const productImage = document.createElement('img');
        productImage.src=p.image;
        productImage.alt=p.title;
        const productButton = document.createElement('button');
        productButton.textContent="Add to Cart"
        productDiv.append(productImage,productTitle,productPrice,productButton)//arrange order
        mainDiv.appendChild(productDiv); //only one element

    })
}
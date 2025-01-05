const btn = document.getElementById('btn');
const mainDiv = document.getElementById('myQuote');
btn.addEventListener('click', fetchData);
function fetchData() {
    fetch("https://dummyjson.com/quotes/random")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            displayData(data);
        })
        .catch(function(err) {
            console.log(err);
        });
}
function displayData(data) {
    const myQuote = document.createElement('h1');
    myQuote.textContent = data.quote;

    const myAuthor = document.createElement('h2');
    myAuthor.textContent = `- ${data.author}`;

    // Clear previous content before appending new data
    mainDiv.innerHTML = '';
    mainDiv.append(myQuote, myAuthor);
}

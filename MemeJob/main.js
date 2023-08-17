const image = document.querySelector('img');
const url = "https://meme-api.com/gimme/1";


fetch(url)
.then(res => res.json())
.then(data => {image.src = data.memes[0].url
console.log(data.memes[0])})
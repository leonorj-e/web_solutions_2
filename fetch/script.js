const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

cat_btn.addEventListener('click', getRamdomCat)
dog_btn.addEventListener('click', getRamdomDog)

function getRamdomCat() {
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        cat_result.innerHTML = `<img src="${data.file}"/>`
    })
}

function getRamdomDog() {
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
       //if(data.url.includes('.mp4')) {
         //getRandomDog()
       //} else {
        dog_result.innerHTML = `<img src="${data.url}"/>`
    })
}
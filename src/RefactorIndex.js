const cardsEl = document.querySelector('.cards');
let liEl, h2, img, ulEl;

main();

/*----------------------All function ------------------ */
function randomColor() {
    const highestNumber = 16777215;//to hex number FFFFFF
    const baseValue = 16;
    let randomColor = Math.floor(Math.random() * highestNumber).toString(baseValue);
    randomColor+='#';
    return randomColor;
}
function main(){
    for (let i = 0; i < data.length; i++) {

        const pokemon = data[i];
        const name = pokemon.name;
        const img1 = pokemon.sprites.other['official-artwork'].front_default;
        const img2 = pokemon.sprites.other['dream_world'].front_default;
    
        createBaseElement();
        h2.innerText = name;
    
       
        img.src = img1;
        const secondClass = 'card-toggle' + i;
        img.setAttribute('class', 'card--img ' + secondClass);
        toggleImage(img1, img2, secondClass);
    
      

        for (let j = 0; j < data[i].stats.length; j++) {
            const stat = data[i].stats[j];
            const li = document.createElement('li');
            li.innerText = stat.stat.name + ": " + stat.base_stat;
            ulEl.appendChild(li);
        }
        /*-------finish main criteria------ */
      createExtraInfo(pokemon,i);
    }
}

function createBaseElement() {
    liEl = document.createElement('li');
    liEl.setAttribute('class', 'card');
    cardsEl.appendChild(liEl);

    h2 = document.createElement('h2');
    h2.setAttribute('class', 'card--title');
    liEl.appendChild(h2);

    img = document.createElement('img');
    img.style.width = '256';
    liEl.appendChild(img);

    ulEl = document.createElement('ul');
    ulEl.setAttribute('class', 'card--text');
    liEl.appendChild(ulEl);

}
function createExtraInfo(pokemon,i) {

  
    const firstP = document.createElement('p');
    const firstGames = getFirstGames(pokemon);
    ulEl.appendChild(firstP);
    firstP.innerText = "Games version: " + firstGames;


    const hiddenP = document.createElement('p');
    hiddenP.setAttribute('class', 'hidden');
    const startSecondP= firstGames.length+3;
    const allGames = getAllGames(pokemon);
    hiddenP.innerText = allGames.substring(startSecondP);
    hiddenP.style.display = 'none';
    ulEl.appendChild(hiddenP);

    const readmore = document.createElement('li');
    const link = document.createElement('a');
    readmore.appendChild(link);
    
    link.innerHTML = 'Read more ..';
    link.href = '#';
    const linkId = 'readmore' + i;
    link.setAttribute('id', linkId);
    ulEl.appendChild(readmore);

    const readmoreLink = document.getElementById(linkId);
    readmoreLink.addEventListener('click', function (event) {
        console.log('link clicked: ' + linkId);
       hiddenP.style.display = 'block';
    });

}
function getFirstGames(pokemon) {
    const firstPartOfGame = pokemon.game_indices[0].version.name + ',' +
        pokemon.game_indices[1].version.name + ',' +
        pokemon.game_indices[2].version.name + ',' +
        pokemon.game_indices[3].version.name;


    return firstPartOfGame;

}
function getAllGames(pokemon) {
    const allGames = pokemon.game_indices.reduce(function (sum, el) {

        return sum + ',' + el.version.name;
    }, " ");
    return allGames;
}

function toggleImage(img1, img2, secondClass) {
    let isToggle = false;

    let getCard = document.querySelector("." + secondClass);
    getCard.addEventListener('click', function (event) {
        

        if (!isToggle) {
            getCard.src = img2;
            console.log('isToggle = ' + isToggle);
            isToggle = true;

        } else {
            getCard.src = img1;
            console.log('isToggle = ' + isToggle);
            isToggle = false;
        }
        const color = randomColor();
        // background-image: linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93)), url(../img/hero.jpeg);
        getCard.style.color = color;

    })
}



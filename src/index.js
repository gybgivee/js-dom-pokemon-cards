const cardsEl = document.querySelector('.cards');


for (let i = 0; i < data.length; i++) {


   const pokemon = data[i];
   const name = pokemon.name;
   const img1 = pokemon.sprites.other['official-artwork'].front_default;
   const img2 = pokemon.sprites.other['dream_world'].front_default;
  
   const hp = pokemon.stats.find(element => element.stat.name === "hp");
   const attack = pokemon.stats.find(element => element.stat.name === "attack");
   const defense = pokemon.stats.find(element => element.stat.name === "defense");
   const specialAttack = pokemon.stats.find(element => element.stat.name === "special-attack");
   const specialDefense = pokemon.stats.find(element => element.stat.name === "special-defense");
   const speed = pokemon.stats.find(element => element.stat.name === "speed");

   const liEl = document.createElement('li');
   liEl.setAttribute('class', 'card');
   cardsEl.appendChild(liEl);

   const h2 = document.createElement('h2');
   h2.setAttribute('class', 'card--title');
   liEl.appendChild(h2);
   h2.innerText = name;

   const img = document.createElement('img');
   const secondClass = 'card-toggle' + i;
   img.setAttribute('class', 'card--img ' + secondClass);
   img.style.width = '256';
   img.src = img1;
   liEl.appendChild(img);

   const ulEl = document.createElement('ul');
   ulEl.setAttribute('class', 'card--text');
   liEl.appendChild(ulEl);

   const liHp = document.createElement('li');
   liHp.innerText = "HP: " + hp.base_stat;
   ulEl.appendChild(liHp);

   const liAttack = document.createElement('li');
   liAttack.innerText = "Attack: " + attack.base_stat;
   ulEl.appendChild(liAttack);

   const liDefense = document.createElement('li');
   liDefense.innerText = "Defense: " + defense.base_stat;
   ulEl.appendChild(liDefense);

   const liSpAttack = document.createElement('li');
   liSpAttack.innerText = "Special-Attack: " + specialAttack.base_stat;
   ulEl.appendChild(liSpAttack);

   const liSpDefense = document.createElement('li');
   liSpDefense.innerText = "Special-Defense: " + specialDefense.base_stat;
   ulEl.appendChild(liSpDefense);

   const liSpeed = document.createElement('li');
   liSpeed.innerText = "Speed: " + speed.base_stat;
   ulEl.appendChild(liSpeed);

   //data[0].game_indices[0].version.name
 
   const firstPartOfGame = pokemon.game_indices[0].version.name+','+
   pokemon.game_indices[1].version.name+','+
   pokemon.game_indices[2].version.name+','+
   pokemon.game_indices[3].version.name;

   const firstGames = firstPartOfGame;
   const firstP = document.createElement('p');
   ulEl.appendChild(firstP);
   firstP.innerText = "Games version: " + firstGames;


   const allGames = pokemon.game_indices.reduce(function (sum, el) {

      return sum + ',' + el.version.name;
   }, " ");
  
   const hiddenP = document.createElement('p');
   hiddenP.setAttribute('class', 'hidden');
   const startSecondP= firstPartOfGame.length+3;
   hiddenP.innerText = allGames.substring(startSecondP);
   hiddenP.style.display = 'none';
   ulEl.appendChild(hiddenP);

   const readmore = document.createElement('li');
   const link = document.createElement('a');
   readmore.appendChild(link);
   link.innerHTML = 'Read more ..';
   link.href = '#';
   const linkId = 'readmore'+i;
   link.setAttribute('id',linkId);
   ulEl.appendChild(readmore);

   const readmoreLink = document.getElementById(linkId);
   readmoreLink.addEventListener('click', function (event) {
      hiddenP.style.display = 'block';
   });


   //toggle pictures
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

   })

}


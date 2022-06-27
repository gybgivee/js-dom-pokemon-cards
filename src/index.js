const cardsEl = document.querySelector('.cards');

for(let i = 0; i < data.length; i++){

   const pokemon = data[i];
   const name = pokemon.name;
   const picture = pokemon.sprites.other['official-artwork'].front_default;
   const hp = pokemon.stats.find(element=> element.stat.name === "hp");
   const attack= pokemon.stats.find(element=> element.stat.name === "attack");
   const defense = pokemon.stats.find(element=> element.stat.name === "defense");
   const specialAttack = pokemon.stats.find(element=> element.stat.name === "special-attack");
   const specialDefense = pokemon.stats.find(element=> element.stat.name === "special-defense");
   const speed = pokemon.stats.find(element=> element.stat.name === "speed");
   
   const liEl = document.createElement('li');
   liEl.setAttribute('class', 'card');
   cardsEl.appendChild(liEl);

   const h2=document.createElement('h2');
   h2.setAttribute('class', 'card--title');
   liEl.appendChild(h2);
   h2.innerText = name;

   const img = document.createElement('img');
   img.setAttribute('class', 'card--img');
   img.style.width = '256';
   img.src = picture;
   liEl.appendChild(img);

   const ulEl = document.createElement('ul');
   ulEl.setAttribute('class', 'card--text');
   liEl.appendChild(ulEl);

   const liHp = document.createElement('li');
   liHp.innerText ="HP: "+ hp.base_stat;
   ulEl.appendChild(liHp);

   const liAttack = document.createElement('li');
   liAttack.innerText ="Attack: "+ attack.base_stat;
   ulEl.appendChild(liAttack);
   
   const liDefense = document.createElement('li');
   liDefense.innerText ="Defense: "+ defense.base_stat;
   ulEl.appendChild(liDefense);
   
   const liSpAttack = document.createElement('li');
   liSpAttack.innerText ="Special-Attack: "+ specialAttack.base_stat;
   ulEl.appendChild(liSpAttack);

   const liSpDefense = document.createElement('li');
   liSpDefense.innerText ="Special-Defense: "+ specialDefense.base_stat;
   ulEl.appendChild(liSpDefense);

   const liSpeed = document.createElement('li');
   liSpeed.innerText ="Speed: "+ speed.base_stat;
   ulEl.appendChild(liSpeed);



}
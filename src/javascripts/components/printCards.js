import char from './data/characters';
import print from './helpers/utilities';

const hero = char.characters;
const xButton = document.getElementById('x-men');
const avengerButton = document.getElementById('avengers');
const guardiansButton = document.getElementById('guardians');

const printCard = (poopooface) => {
  let stringDom = '';
  for (let i = 0; i < hero.length; i += 1) {
    if (hero[i].teamId === poopooface) {
      stringDom += `
      <div class='card col-sm-2' style='width: 18rem;'>
        <h3 class='card-title'>${hero[i].name}</h3>
        <img src='${hero[i].imageUrl}' class='card-img-top ${hero[i].genderId}' alt='${hero[i].name}'>
        <div class='card-body'>
          <p class='card-text'>${hero[i].description}</p>
        </div>
      </div>
      `;
      print.printToDom('marvel-div', stringDom);
    }
  }
  return stringDom;
};

const clearFunc = () => {
  print.printToDom('marvel-div', '');
};

const xButtonEventFunc = () => {
  xButton.addEventListener('click', () => {
    clearFunc();
    printCard('team0');
  });
};

const avengerButtonEventFunc = () => {
  avengerButton.addEventListener('click', () => {
    clearFunc();
    printCard('team1');
  });
};

const guardiansButtonEventFunc = () => {
  guardiansButton.addEventListener('click', () => {
    clearFunc();
    printCard('team2');
  });
};
export default { xButtonEventFunc, avengerButtonEventFunc, guardiansButtonEventFunc };

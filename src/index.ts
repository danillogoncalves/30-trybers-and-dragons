import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import getRandomInt from './utils';

const player1 = new Character('Danillo');
const player2 = new Character('Paty');
const player3 = new Character('Victor');

const monster1 = new Monster();
const monster2 = new Dragon();

let index = 0;
const number = getRandomInt(1, 10);

while (index < number) {
  player1.levelUp();
  index += 1;
}

const pvp = new PVP(player1, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(array: Battle[]): void {
  array.forEach((battle) => battle.fight());
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
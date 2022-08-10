import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  public player: Fighter;
  public environment: SimpleFighter[];
  constructor(player: Fighter, environment: SimpleFighter[]) {
    super(player);
    this.player = player;
    this.environment = environment;
  }

  fight(): number {
    let i = 0;
    while (i === 0) {
      this.environment.forEach((monster) => {
        this.player.attack(monster);
        monster.attack(this.player);
      });
      const allDead = this.environment
        .every(({ lifePoints }) => lifePoints === -1);
      if (super.fight() === -1) i = -1;
      if (allDead) i = 1;
    }
    return i;
  }
}
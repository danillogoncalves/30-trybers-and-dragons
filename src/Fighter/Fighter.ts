import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy,

  attack(energy: Fighter): void;
  special?(energy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}
import Character from './character';
import getBaseLog from './getBaseLog';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }

  get damage() {
    return Math.round(this.damagePower);
  }

  set damage(distance) {
    if (this.health >= 0 && distance > 1 && distance < 6) {
      // Сначала считаем погрешность, которая будет при расстоянии от 2 до 5 клеток
      this.difference = (this.attack * ((distance - 1) * 10)) / 100;
      // Вычитаем эту разницу для получения силы урона на расстоянии и возвращаем
      this.damagePower = this.attack - this.difference;
    } else if (distance === 1) {
      this.damagePower = this.attack;
    } else if (distance >= 6) {
      this.difference = (this.attack * ((5 - 1) * 10)) / 100;
      this.damagePower = this.attack - this.difference;
    } else if (distance <= 0) {
      throw new Error('Ошибка при вводе данных.\n'
      + 'Неправильная дистанция (она должна быть >= 1).\n'
      + 'Попробуйте ещё раз.');
    }
  }

  get stoned() {
    return Math.round(this.damagePower);
  }

  set stoned(distance) {
    this.damage = distance;
    this.damagePower = this.damage;
    this.damagePower -= getBaseLog(2, distance) * 5;
  }
}

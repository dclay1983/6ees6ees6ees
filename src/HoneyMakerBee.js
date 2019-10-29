var HoneyMakerBee = class extends Bee {
  constructor () {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney = function () {
    this.honeyPot++;
  };

  giveHoney = function () {
    this.honeyPot -= this.honeyPot > 0 ? 1 : 0;
  };
};

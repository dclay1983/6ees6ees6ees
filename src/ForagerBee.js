var ForagerBee = class extends Bee {
  constructor () {
    super();
    this.age = 10;
    this.canFly = true;
    this.job = 'find pollen'
    this.treasureChest = [];
  };

  forage = function (treasure) {
    this.treasureChest.push(treasure);
  };
};

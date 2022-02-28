export default class Car {
  constructor(name) {
    this.name = name;
  }

  race() {
    let canGo = true;
    if (Math.random() * 9 < 4) {
      canGo = false;
    }
    return canGo;
  }
}

'use strict';

class Car {
  constructor() {
    this.wheels = 4;

  }

  drive() {
    return true;
  }

  stop() {
    return true;
  }
}

class Motorcycle {
  constructor() {
    this.wheels = 2;
  }

  drive() {
    return true;
  }

  stop() {
    return true;
  }

  wheelie() {
    return true;
  }
}

module.exports = {
  Car,
  Motorcycle,
};
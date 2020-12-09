import { makeAutoObservable } from 'mobx';

class Doubler {
  value;

  constructor(value: number) {
    makeAutoObservable(this);
    this.value = value;
  }

  get double() {
    return this.value * 2;
  }

  increment() {
    this.value++;
  }
}

const doubleClassAuto = new Doubler(1);
export default doubleClassAuto;

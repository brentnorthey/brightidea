import {qs, $on} from './helpers';

export default class View {

  constructor(name) {
    this.name = name;
    this.castContainer = qs('.container__cast');

  }

  // bindPrev(handler) {
  //   $on(this.countPrev, 'click', () => {
  //     handler();
  //   });
  // }

  clearWeather() {
    this.castContainer.innerHTML = '';
  }

}
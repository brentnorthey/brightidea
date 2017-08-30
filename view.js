import {qs, $on} from './helpers';

export default class View {

  constructor(name) {
    this.name = name;
    this.castContainer = qs('.container');
    this.input = qs('.input');
    this.formSubmit = qs('.submit');
    this.history = qs('.history');
  }

  bindSubmit(handler) {
    $on(this.formSubmit, 'click', (e) => {
      e.preventDefault();
    handler();
  });
  }

  bindHistory(handler) {
    $on(this.history, 'click', (e) => {
      e.preventDefault();
    handler();
  });
  }

  clearCasts() {
    this.castContainer.innerHTML = '';
  }

  getInput(){
    return this.input;
  }


}
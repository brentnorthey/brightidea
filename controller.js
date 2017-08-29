import {qs} from './helpers';
import Cast from './cast';


export default class Controller {
  constructor(name, view) {

    this.name = name;
    this.view = view;

    renderCast();
    // for later
    // view.bindPrev(this.prev.bind(this));
  }

  getName() {
    return this.name;
  }

  renderCast() {
    this.view.clearCasts();
    let newcCast = new Cast('First');

    console.log(newCast.getName());


  }
}
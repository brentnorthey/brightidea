import {qs, $on} from './helpers';

export default class Cast {

  constructor(name, obj) {
    this.name = name;
    this.attributes = obj;
  }

  getAttributes() {
    return this.attributes;
  }

  getName() {
    return this.name;
  }


  drawCast() {

    return "cast drawing"
  }

}
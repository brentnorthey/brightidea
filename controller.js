import {qs, $getJSON} from './helpers';
import Cast from './cast';

export default class Controller {
  constructor(name, view) {
    this.name = name;
    this.view = view;
    this.data = null;
    this.history = [];

    view.bindSubmit(this.submit.bind(this));
    view.bindHistory(this.showHistory.bind(this));
  }

  getName() {
    return this.name;
  }

  setData(data) {
    this.data = data;
  }

  getData(){
    return this.data;
  }

  getHistory(){
    return this.history;
  }

  getWeather(zip) {
    console.log(`Fetching: ${zip}`);
    let gravy = '45b608b94ef13a346b94101ef639d4cc'; // Scene of Sound
    let potatoes = `https://api.openweathermap.org/data/2.5/forecast?q=${zip},us&APPID=${gravy}`;

﻿ $getJSON(potatoes,
      (err, data) =>{
        if (err !== null) {
          console.log('Something went wrong: ' + err);
        } else {
          this.setData(data);
          this.createCast();
        }
      })
  }

  createCast() {
    let cast = new Cast(this.data);
    this.history.push(cast);
    localStorage.setItem("WeatherHistory",JSON.stringify(this.history));
    this.view.castContainer.innerHTML = cast.renderCast();
  }

  showHistory() {
   let history = JSON.parse(localStorage.getItem("WeatherHistory"));
    this.view.clearCasts();

    Object.keys(history).forEach( (key) => {
      // console.log(key, history[key]);
      // let cast = new Cast(history[key]);
      this.view.castContainer.innerHTML +=  `<div>${history[key].data.city.name}</div>`;
      // console.log(cast.getData())
      // this.view.castContainer.innerHTML +=  cast.renderCast();
     });

  }

  submit (){
    let zip = this.view.getInput().value;
    this.getWeather(zip);
  }
}
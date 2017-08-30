import {qs, $on} from './helpers';

export default class Cast {

  constructor(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  renderCast() {
    let desc = this.data.list["0"].weather["0"].description;
    let city = this.data.city.name;
    let date =  this.data.list["0"].dt_txt;
    let wind = this.data.list["0"].wind.speed;
    let temp = ((this.data.list["0"].main.temp-273.15)*1.8)+32;
    temp = Math.floor(temp);
    let pressure = this.data.list["0"].main.pressure;
    let humidity = this.data.list["0"].main.humidity;

    return `<div class="container__item fadeIn animated">
              <div>City: ${city}</div>
              <div><img src="https://openweathermap.org/img/w/${this.data.list["0"].weather["0"].icon}.png"/></div>
              <div>${desc} @ ${date}</div>
              <div>Wind: ${wind}</div>
              <div>Temp: ${temp}</div>
              <div>Pressure: ${pressure}</div>
              <div>Humidity: ${humidity}</div>
            </div>`;
  }

}
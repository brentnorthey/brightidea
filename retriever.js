export default class Retriever {

  constructor(name) {
    this.name = name;
    this.data = null;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  getName() {
    return this.name;
  }


}






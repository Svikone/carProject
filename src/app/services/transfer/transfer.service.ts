import { Injectable } from '@angular/core';

export class TransferService {
  public data;
  constructor() { }
  setData(res) {
    this.data=res;
    console.log(this.data);
  }
  getData() {
    let temp=this.data;
    this.clearData();
    console.log(temp);
    return temp;
  }
  clearData() {
    this.data=undefined;
  }

}

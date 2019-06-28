import { Component, ViewChild } from '@angular/core';
import { FulltextComponent } from './fulltext/fulltext.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('fulltext')
  private fulltext: FulltextComponent;
  constructor() {


  }
  title = 'carsProject';
  active: boolean = false;
  getCar($event) {
    this.fulltext.getCar($event);
    console.log($event)
  }
}


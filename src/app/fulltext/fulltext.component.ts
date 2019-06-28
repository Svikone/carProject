import { Component, OnInit } from '@angular/core';
import { TransferService } from '../services/transfer/transfer.service';

@Component({
  selector: 'app-fulltext',
  templateUrl: './fulltext.component.html',
  styleUrls: ['./fulltext.component.scss']
})
export class FulltextComponent implements OnInit {
  public info;
  constructor( private transfer: TransferService ) { }

  ngOnInit() {
  }
  getCar(car) {
    this.info = car;
    console.log(this.info.info)

  }
  
}

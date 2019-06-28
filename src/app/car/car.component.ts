import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { service } from '../service';
import { TransferService } from '../services/transfer/transfer.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  providers: [service]
})
export class CarComponent implements OnInit {

  constructor(private service:service, private transfer: TransferService) { }
  cars=[];
  qwe="";
  active: boolean = false;
  @Output() myEmmite=new EventEmitter();
  ngOnInit() {
    this.cars=this.service.cars;
    console.log(this.cars);
  }

  q() {
    //this.service.qwe=this.tt;
  }

  open(item) {
    this.myEmmite.emit(item);
    this.transfer.setData(item);
    console.log(item)
  }
}

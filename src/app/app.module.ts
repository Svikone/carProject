import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { FulltextComponent } from './fulltext/fulltext.component';
import { TransferService } from './services/transfer/transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    FulltextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FulltextComponent,
    TransferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

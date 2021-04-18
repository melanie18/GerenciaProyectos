import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as fromCore from '@core/index';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    fromCore.CoreModule,
  ],
  bootstrap: [fromCore.LayoutComponent]
})
export class AppModule {
  constructor() {
  }
}

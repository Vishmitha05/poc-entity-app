import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverModule } from './driver/driver.module';
import { VehicleModule } from './vehicle/vehicle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DriverModule,
    VehicleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

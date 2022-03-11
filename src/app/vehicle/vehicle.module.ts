import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { UpdateOdometerComponent } from './updateOdometer/updateOdometer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehicleComponent, UpdateOdometerComponent],
  exports: [VehicleComponent]

})
export class VehicleModule { }

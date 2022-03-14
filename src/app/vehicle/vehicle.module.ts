import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { FormsModule } from '@angular/forms';
import { AddVehicleComponent } from './AddVehicle/AddVehicle.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [VehicleComponent, AddVehicleComponent],
  exports: [VehicleComponent,],

})
export class VehicleModule { }

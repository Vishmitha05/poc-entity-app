import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DriverComponent, DriversListComponent],
  exports: [DriverComponent]
})
export class DriverModule { }

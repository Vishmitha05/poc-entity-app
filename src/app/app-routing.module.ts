import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
// import { VehicleModule } from './vehicle/vehicle.module';

const routes: Routes = [
  { path: 'vehicle', component: VehicleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

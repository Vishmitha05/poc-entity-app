import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../shared/models/vehicle.model';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private _vehicle: VehicleService) {
    this.vehicles = this._vehicle.getVehicles();

  }
  // updateOdometer(item) {
  //   console.log(this.odometer)
  //   // console.log(this.vehicles[item].name)
  //   // this.active = this.vehicles[item].name;
  //   this.vehicles[item].odometer = this.odometer;
  // }

  deleteVehicle(item) {
    this.vehicles.splice(item, 1)
  }
  ngOnInit() {
  }

}

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
  nameIndex = "";
  computedOdometer: number = 0;
  constructor(private _vehicle: VehicleService) {
    this.vehicles = this._vehicle.getVehicles();
  }

  updateOdometer(item) {
    this.nameIndex = this.vehicles[item].name
    console.log(this.vehicles[item].odometer)
    this.computedOdometer = this.vehicles[item].odometer
    console.log("computed", this.computedOdometer)
  }
  updated() {
    for (var i = 0; i < this.vehicles.length; i++) {
      if (this.vehicles[i].name === this.nameIndex) {
        this.vehicles[i].odometer = this.computedOdometer
        console.log(this.vehicles[i].odometer)
      }
    }
    this.nameIndex = "";
  }
  changeStatus(item) {
    if (this.vehicles[item].maintenanceStatus == 'OK') {
      this.vehicles[item].maintenanceStatus = "Due"
    }
    else {
      this.vehicles[item].maintenanceStatus = "OK"
    }
  }

  deleteVehicle(item) {
    this.vehicles.splice(item, 1)
  }
  ngOnInit() {
  }

}

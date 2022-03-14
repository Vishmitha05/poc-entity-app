import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle.model';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddVehicle',
  templateUrl: './AddVehicle.component.html',
  styleUrls: ['./AddVehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  vehicles: Vehicle[];
  name: string;
  vin: string;
  make: string;
  model: string;
  year: number;
  licenseNo: string;
  odometer: number
  constructor(private _vehicle: VehicleService, private route: Router) {
    this.vehicles = this._vehicle.getVehicles();
  }
  addVehicle() {
    console.log("welcome")
    if ((this.name && this.vin) !== " ") {
      console.log("welcome")
      this.vehicles.push({
        "id": 1,
        "name": this.name,
        "vin": this.vin,
        "make": this.make,
        "model": this.model,
        "year": this.year,
        "maintenanceStatus": "OK",
        "licenseNo": this.licenseNo,
        "odometer": this.odometer
      })
      console.log(this._vehicle)
    }
    this.route.navigate(['/vehicle']);


  }
  ngOnInit() {
  }

}

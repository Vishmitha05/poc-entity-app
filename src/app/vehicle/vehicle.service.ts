import { Injectable } from '@angular/core';
import { Vehicle } from '../shared/models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicles: Vehicle[] = [
    {
      id: 1,
      name: "My Camry",
      vin: 'JH4DB7660SS001798',
      make: 'BMW',
      model: '540i',
      year: 2018,
      licenseNo: 'ABS 2019',
      odometer: 1500,
      fuelLevel: 95
    },

    {
      id: 2,
      name: "Beast",
      vin: 'JH4DB7660SS001798',
      make: 'BMW',
      model: '540i',
      year: 2018,
      licenseNo: 'ABS 2019',
      odometer: 1500,
      fuelLevel: 95
    },

  ]
  vehicle: Vehicle;

  getVehicles() {
    return this.vehicles;
  }


  constructor() { }

}

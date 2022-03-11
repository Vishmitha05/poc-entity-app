import { EventEmitter, Injectable } from '@angular/core';
import { Driver } from '../shared/models/driver.model';
import { SystemStatus } from '../shared/models/status.model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  drivers: Driver[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'email@gma.vom',
      phone: '1234567890',
      address: '123 Main St',
      licenseNo: '123456789',
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      email: 'email@gma.vom',
      phone: '1234567890',
      address: '123 Main St',
      licenseNo: '123456789',
    }
  ];
  driver: Driver;
  driverAdded = new EventEmitter<Driver>();
  driverDeleted = new EventEmitter<Driver>();

  constructor() { }

  /**
   - addDriver()
  - deleteDriver()
  - getDrivers()
  - getDriver()
  - updateDriver()
  - assignVehicle()
  - unassignVehicle()
  - swapVehicle()
  - updateWorkStatus()
  - updateDriverStatus()
   */

  getDrivers() {
    return this.drivers;
  }

  getDriver(id: number) {
    this.driver = this.drivers.find(driver => driver.id === id);
    return this.driver;
  }

  addDriver(driver: Driver) {
    this.drivers.push(driver);
    // this.driverAdded.emit(driver);
  }

  deleteDriver(driver: Driver) {
    this.drivers.splice(this.drivers.indexOf(driver), 1);
    // this.driverDeleted.emit(driver);
  }

  updateDriver(id: number, driver: Driver, key: string) {
    const index = this.drivers.findIndex(d => d.id === id);
    this.drivers[index][key] = driver[key];
  }

  assignVehicle(driver: Driver, vehicleId: number) {
    driver.vehicleId = vehicleId;
  }

  unassignVehicle(driver: Driver) {
    driver.vehicleId = null;
  }

  updateDriverStatus(driverId: number, status: SystemStatus) {
    this.getDriver(driverId);
    this.driver.status = status;
  }


}

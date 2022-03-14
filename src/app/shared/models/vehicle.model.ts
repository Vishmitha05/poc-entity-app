import { Driver } from "./driver.model";
import { Status } from "./status.model";

export class Vehicle {
    id: number;
    name: string;
    vin: string;
    make: string;
    model: string;
    year: number;
    licenseNo: string;
    odometer: number;
    status?: Status;
    maintenanceStatus?: string;
    fuelLevel?: number;
    // device: Device;
    driver?: Driver;
    createdTime?: Date;

    constructor(vehicle: Vehicle) {
        this.id = vehicle.id;
        this.name = vehicle.name;
        this.vin = vehicle.vin;
        this.make = vehicle.make;
        this.model = vehicle.model;
        this.year = vehicle.year;
        this.licenseNo = vehicle.licenseNo;
        this.odometer = vehicle.odometer;
        this.status = vehicle.status;
        this.maintenanceStatus = vehicle.maintenanceStatus;
        this.fuelLevel = vehicle.fuelLevel;
        this.createdTime = new Date();
    }
}
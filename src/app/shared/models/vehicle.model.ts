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
}
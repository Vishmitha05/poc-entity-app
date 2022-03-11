import { SystemStatus, WorkStatus } from "./status.model";

export class Driver {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    licenseNo: string;
    workStatus?: WorkStatus;
    status?: SystemStatus;
    vehicleId?: number;
    createdDate?: Date;
    updatedDate?: Date;

    constructor(driver: Driver) {
        this.id = driver.id;
        this.firstName = driver.firstName;
        this.lastName = driver.lastName;
        this.email = driver.email;
        this.phone = driver.phone;
        this.address = driver.address;
        this.licenseNo = driver.licenseNo;
        this.workStatus = driver.workStatus;
        this.status = driver.status;
        this.vehicleId = driver.vehicleId;
        this.createdDate = new Date();
        this.updatedDate = new Date();
    }
}
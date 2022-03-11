import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/shared/models/driver.model';
import { SystemStatus } from 'src/app/shared/models/status.model';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  drivers: Driver[];

  constructor(private _driver: DriverService) { }

  ngOnInit() {
    this.drivers = this._driver.getDrivers();
  }

  updateStatus(driver: Driver) {
    let status;
    if (driver.status === "Active") {
      status = SystemStatus.deactivated
    } else {
      status = SystemStatus.active;
    }
    this._driver.updateDriverStatus(driver.id, status);
  }
}

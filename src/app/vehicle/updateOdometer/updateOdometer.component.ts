import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle.model';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-updateOdometer',
  templateUrl: './updateOdometer.component.html',
  styleUrls: ['./updateOdometer.component.css']
})
export class UpdateOdometerComponent implements OnInit {
  vehicles: Vehicle[];
  constructor(private _vehicle: VehicleService) { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { BodyMassIndexComponent } from "../components/body-mass-index/body-mass-index.component";
import { TotalDailyEnergyExpenditureComponent } from "../components/total-daily-energy-expenditure/total-daily-energy-expenditure.component";

@Component({
  selector: 'app-health-report',
  imports: [BodyMassIndexComponent, TotalDailyEnergyExpenditureComponent],
  templateUrl: './health-report.component.html',
  styleUrl: './health-report.component.css'
})
export class HealthReportComponent {

}

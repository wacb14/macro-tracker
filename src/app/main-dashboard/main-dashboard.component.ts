import { Component } from '@angular/core';
import { RadialProgressBarComponent } from "../components/radial-progress-bar/radial-progress-bar.component";

@Component({
  selector: 'app-main-dashboard',
  imports: [RadialProgressBarComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css',
})
export class MainDashboardComponent {
}

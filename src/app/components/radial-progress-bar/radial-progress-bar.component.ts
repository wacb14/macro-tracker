import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radial-progress-bar',
  imports: [],
  templateUrl: './radial-progress-bar.component.html',
  styleUrl: './radial-progress-bar.component.css',
})
export class RadialProgressBarComponent {
  @Input({ required: true }) progress = 0;
  @Input() color = "text-blue-500";

  calculateDashArray(radius: number) {
    return 2 * Math.PI * radius;
  }

  calculateDashOffset(radius: number, progress: number) {
    const circumference = 2 * Math.PI * radius;
    return circumference - (progress / 100) * circumference;
  }
}

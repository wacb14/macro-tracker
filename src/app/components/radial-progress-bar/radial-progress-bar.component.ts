import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radial-progress-bar',
  imports: [],
  templateUrl: './radial-progress-bar.component.html',
  styleUrl: './radial-progress-bar.component.css',
})
export class RadialProgressBarComponent implements OnInit {
  @Input({ required: true }) value = 0;
  progress=0
  @Input() color = 'text-blue-500';

  ngOnInit() {
    this.animateProgress();
  }

  animateProgress() {
    let targetValue = this.value;
    let step = 1; // Incremental step
    let interval = 20; // Animation speed in ms

    let animation = setInterval(() => {
      if (this.progress < targetValue) {
        this.progress += step;
      } else {
        clearInterval(animation);
      }
    }, interval);
  }

  calculateDashArray(radius: number) {
    return 2 * Math.PI * radius;
  }

  calculateDashOffset(radius: number, progress: number) {
    const circumference = 2 * Math.PI * radius;
    return circumference - (progress / 100) * circumference;
  }
}

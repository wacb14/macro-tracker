import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-information-card',
  imports: [NgClass],
  templateUrl: './information-card.component.html',
  styleUrl: './information-card.component.css',
})
export class InformationCardComponent {
  title = input.required<string>();
  message = input.required<string>();
  content = input('');
  lastCard = input(false);
}

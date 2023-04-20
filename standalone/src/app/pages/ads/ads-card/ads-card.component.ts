import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsCardService } from './ads-card.service';

@Component({
  selector: 'app-ads-card',
  standalone: true,
  imports: [CommonModule],
  providers: [AdsCardService],
  templateUrl: './ads-card.component.html',
  styleUrls: ['./ads-card.component.scss'],
})
export class AdsCardComponent {
  constructor(public adsService: AdsCardService) {}
}

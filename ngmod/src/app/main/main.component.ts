import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private router: Router) {}
  goToCard() {
    this.router.navigateByUrl('/card/124?guid=asddas12-faas23-asfd32');
  }
}

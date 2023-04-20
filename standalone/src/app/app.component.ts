import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, BreadcrumbsComponent],
  standalone: true,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'standalone';
}

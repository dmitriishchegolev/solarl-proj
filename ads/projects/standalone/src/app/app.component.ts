import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, BreadcrumbsComponent, ButtonComponent],
  standalone: true,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'standalone';
}

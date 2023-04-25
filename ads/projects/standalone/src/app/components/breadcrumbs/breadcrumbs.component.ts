import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  public breadCrumbsItems: any = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.getBreadCrumbs());
  }

  private getBreadCrumbs() {
    this.breadCrumbsItems = [];
    this.getBreadCrumbsChildren(this.activatedRoute.children);
    debugger;
  }

  private getBreadCrumbsChildren(childrens: ActivatedRoute[], path = '') {
    childrens.forEach((children) => {
      if (children.routeConfig && children.routeConfig.title) {
        let label = children.routeConfig.title;
        if ((children.snapshot.data as any).breadCrumbsLabel) {
          label = (children.snapshot.data as any).breadCrumbsLabel;
        } else if ((children.snapshot.params as any).id) {
          label += ` ${(children.snapshot.params as any).id}`;
          debugger;
        }
        path = path + '/' + children.routeConfig.path;
        this.breadCrumbsItems.push({
          label,
          url: path,
        });
      }
      if (children.children.length) {
        this.getBreadCrumbsChildren(children.children, path);
      }
    });
    debugger;
  }
}

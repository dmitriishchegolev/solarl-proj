import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  public desription$ = this.activatedRoute.data.pipe(
    map((r: any) => r.description)
  );
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((r) => {
      debugger;
    });
    this.activatedRoute.queryParams.subscribe((r) => {
      debugger;
    });
  }
}

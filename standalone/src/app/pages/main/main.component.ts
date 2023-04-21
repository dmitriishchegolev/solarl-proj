import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatetimePipe } from 'src/app/components/datetime.pipe';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule, DatetimePipe],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public data: any[] = [];
  public data$: Observable<Data[]> = this.http.get<Data[]>(
    'http://90.156.209.122:5000/Advert'
  );
  constructor(private http: HttpClient) {
    this.http
      .get<Data[]>('http://90.156.209.122:5000/Advert')
      .subscribe((r) => {
        this.data = r;
      });
  }
}

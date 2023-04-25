import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
moment.locale('ru');
@Pipe({
  name: 'datetime',
  standalone: true,
})
export class DatetimePipe implements PipeTransform {
  transform(value: string): unknown {
    return moment(value).fromNow();
  }
}

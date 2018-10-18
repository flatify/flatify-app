import { Pipe, PipeTransform } from '@angular/core';
import { distanceInWordsToNow } from 'date-fns';
import * as locale from 'date-fns/locale/de';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return distanceInWordsToNow(value, { locale });
  }
}

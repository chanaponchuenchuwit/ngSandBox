import { Pipe, PipeTransform } from '@angular/core';
import { AirportModel } from '../data/AirportModel';

@Pipe({
  name: 'jsonAirportInfo'
})
export class JsonAirportInfoPipe implements PipeTransform {

  transform(value: AirportModel, ...args: unknown[]): unknown {
    if (typeof value === 'object') {
      return value.name
    } else {
      return '';
    }
  }

}

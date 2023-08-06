import { Pipe, PipeTransform } from '@angular/core';
import { AirportModel } from '../data/airportsData';

@Pipe({
  name: 'jsonAirportInfo'
})
export class JsonAirportInfoPipe implements PipeTransform {

  transform(value: AirportModel, ...args: unknown[]): unknown {
    if (typeof value === 'object') {
      const {name, city, state, country } = value;
      return JSON.stringify({name, city, state}).replace(new RegExp(',', 'g'), ' ,');
    } else {
      return JSON.stringify(value);
    }
  }

}

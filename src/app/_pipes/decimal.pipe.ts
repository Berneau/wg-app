import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value, currency, seperator): string {

    if (value === null || value === undefined) return null;

    if (typeof value == 'string') value = Number(value);

    value = value.toFixed(2);

    if (seperator) value = value.replace('.', seperator);

    return currency ? `${currency} ${value}` : value;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {
  transform(value: any, filters?: any): any {
    if (!value) {
      return;
    }
    if (!filters) {
      return value;
    }
    filters = filters.toLowerCase();

    return value.filter(item => {
      let matchFound = false;

      if (item.details && item.details.types) {
        matchFound = JSON.stringify(item.details.types)
          .toLowerCase()
          .includes(filters);
      }
      return matchFound;
    });
  }
}

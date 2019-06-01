import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, searchText?: any): any {
    if (!value) {
      return;
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLowerCase();

    // NEED TO MODIFY FILTER TO ONLY INCLUDE NAME AND ID

    return value.filter(item => {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(searchText);
    });
  }
}

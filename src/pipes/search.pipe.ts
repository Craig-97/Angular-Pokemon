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

    return value.filter(item => {
      let matchFound = false;

      if (item.name && item.url) {
        const name = item.name;
        const index = item.url.split('/')[item.url.split('/').length - 2];

        const searchName = JSON.stringify(name).toLowerCase().includes(searchText);
        const searchId = JSON.stringify(index).toLowerCase().includes(searchText);

        if (searchName || searchId) {
          matchFound = true;
        }
      }
      return matchFound;
    });
  }
}

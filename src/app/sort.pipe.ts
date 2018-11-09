import { Pipe, PipeTransform } from '@angular/core';
import { SortObj, User } from './interfaces';

@Pipe({
  name: 'sort'
})


export class SortPipe  implements PipeTransform {
  transform(array: Array<User>, args: SortObj):  Array<User> {
    const column = args.column;
    const desc = args.desc;
    if (column && array && array.length) {
      array.sort((a: any, b: any) => {
        if (a[column] < b[column]) {
          return desc ? -1  : 1;
        } else if (a[column] > b[column]) {
          return desc ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
    return array;
  }
}

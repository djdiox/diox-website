import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTools'
})
export class FilterToolsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

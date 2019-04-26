import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    // Transfor Logic
    // return value;

    // let result = 'CA$';
    // result = result + value;
    // return result;


    if (!value) {
      return value;
    } else {
      return value.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }
}

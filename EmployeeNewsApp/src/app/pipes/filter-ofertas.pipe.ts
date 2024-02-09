import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOfertas'
})
export class FilterOfertasPipe implements PipeTransform {
    
  transform(value: any, args: any): any {
    return null;
  }

}

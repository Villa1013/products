import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value, args?) {
    if (value==null) {
      return null;
    }
    if(args === null) return value;
    return value.filter(item => {
      if(args > 10000){
      	return Number(item.price) >= args;
      }else{
      	return Number(item.price) <= args;
      }
    });
  }

}

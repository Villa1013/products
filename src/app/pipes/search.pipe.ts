import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

	transform(value, [term]){
		if (value==null) {
	      return null;
	    }
	    if(term === undefined) return value;
	    return value.filter((item)=> item.name.toLowerCase().startsWith(term));
	}

}

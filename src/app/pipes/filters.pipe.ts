import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

	transform(values: Array<any>, args:any[]):any {
	  	if (values==null) {
	      return null;
	    }
	    if(args === undefined) return values;
	    return values.filter((value) => {
	    	if(args[0][1] === null){
	    		return values;
	    	}else{
		        for (let i = 0; i < args.length; i++) {
		            if (value[args[i][0]] != args[i][1]) {
		                return false;
		            }
		        }
	    	}
	        return true;
	    });
	}

}

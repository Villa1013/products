import { Component, OnInit, NgZone} from '@angular/core';
import { AppSettings } from '../../app.settings';
import { HttpService } from '../../services/http.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { FiltersPipe } from '../../pipes/filters.pipe';
import { NumberMaxPipe } from '../../pipes/number-max.pipe';
import { AgePipe } from '../../pipes/age.pipe';


@Component({
  selector: '[data-app-home]',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  products: any = [];
  searchValue:any;
  availble=null;
  seller=null;
  exhausted=null;
  maxNumber=null;
  sliderValue= null;
  select= 0;
  filterSelect='';

  constructor( private _services: HttpService , private zone: NgZone) { 

  }

  ngOnInit() {

    this.searchValue = '';

    // SERVICES HTTP

    this._services.request(AppSettings.defaultUrl)
      .subscribe(res => {
        this.products = res; 
        console.log(this.products)
      }, err => {
        console.log(err) 
      });
  } 




  // VALIDATE FILTERS
  validaAvalible(){
    if(this.availble == null){
      this.zone.run(() => {
        this.availble = true; 
        this.exhausted = null;
      });
    }else{
      this.zone.run(() => {
        this.availble = null; 
      });
    }
  }

  validaSeller(){
    if(this.seller == null){
      this.zone.run(() => {
        this.seller = true;
      });
    }else{
      this.zone.run(() => {
        this.seller = null;
      });
    }
  }

  exhaustedValidate(){
    if(this.exhausted == null){
      this.zone.run(() => {
        this.exhausted = false;
        this.availble = null; 
      });
    }else{
      this.zone.run(() => {
        this.exhausted = null;
      });
    }
  }

  onChange(newValue) {
    if(newValue == 0){
      this.filterSelect = '';
    }else if(newValue == 1){
      this.filterSelect = 'name';
    }else if(newValue == 2){
      this.filterSelect = '-price';
    }else if(newValue == 3){
      this.filterSelect = 'price';
    }
  }
  

} 
 
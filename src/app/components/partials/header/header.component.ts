import { Component, OnInit, NgZone, DoCheck} from '@angular/core';
import { AllCartService } from '../../../services/all-cart.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';  

@Component({
  selector: '[data-app-header]',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public allCar:any  = [];

  showCarts:boolean = false;
  contProducts;
  addNumber:Boolean = false;

  constructor(private cart:AllCartService, private zone: NgZone) { }

  ngOnInit() {
    this.allCar = this.cart.allData();
    this.contProducts = this.cart.contProductsAll();
  }

  ngDoCheck(){
    this.contProducts = this.cart.contProductsAll();
    this.addNumber = true;
  }



  // OPERATIONS ADD PRODUCT

  sumaQuantity(price, quantity){
  	return parseFloat(price) * quantity;
  }

  add(index:Number){
  	this.cart.addQuantity(index);
    this.addNumber = true;
  }

  subtract(index:Number){
  	this.cart.removeQuantity(index);
  }

  remove(index:Number){
  	this.cart.removeProduct(index);
  }

  // TOTAL BUY

  total(){
  	var all = 0;

  	for(var i = 0; i < this.allCar.length; i ++){
  		all = all + (this.allCar[i].price * this.allCar[i].quantity);
  	}

  	return all;
  }

}

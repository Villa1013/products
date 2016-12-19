import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class AllCartService {
	
  data: any;
  allProducts:any = [];
  contProducts = 0;

  constructor(private zone: NgZone) {
    
  }

  	// ALL PRODUCTS
	allData() {
		return this.allProducts;
	}

	// CONT PRODUCTS
	contProductsAll(){
		return this.contProducts;
	}

	// ADD PRODUCT
	addQuantity(id){
		let quantity = this.allProducts[id].quantity + 1;
		this.allProducts[id].quantity = quantity;
		this.addCont()
	}

	// REST CONT PRODUCT
	removeQuantity(id){
		let quantity = this.allProducts[id].quantity - 1;
		this.allProducts[id].quantity = quantity;
		this.restCont();
	}

	// REMOVE PRODUCTO
	removeProduct(id){
		let allProd = this.allProducts[id].quantity;
		this.zone.run(() => {
			this.contProducts = this.contProducts - allProd;
		});
		this.allProducts.splice(id, 1);
	}

	// NEW ADD PRODUCT
	setData(data:any, id:Number) {

		let add:boolean = true;
		let index;
		let quantity;

		for(var i = 0; i < this.allProducts.length; i++){
			if(this.allProducts[i].id === id){
				add = false;
				index = i;
				break;
			} 
		}

		if(add){
			this.data = data;
			this.data.quantity = 1;
			this.allProducts.push(data);
			this.addCont()
		}else{
			quantity = this.allProducts[index].quantity + 1;
			this.allProducts[index].quantity = quantity;
			this.addCont()
		}
	} 


	// REUSABLE FUNCTIONS 
	addCont(){
		this.zone.run(() => {
			this.contProducts = this.contProducts + 1;
		});
	}
	restCont(){
		this.zone.run(() => {
			this.contProducts = this.contProducts - 1;
		});
	}
 
}
  
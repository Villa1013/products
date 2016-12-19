import { Component, OnInit, Input } from '@angular/core';
import { AllCartService } from '../../services/all-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

	@Input() val;

  constructor(private cart:AllCartService) { }

  ngOnInit() {
  }

  // VALIDATE AVABALIBLE
  validateAvalible(val: boolean){
    return val === true ? '' : 'Agotado';
  }

  // PUSH CART
  addCart(el, id){
    this.cart.setData(el, id);
  }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

@Component({
  moduleId: module.id,
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems;
  newItemTitle;

  constructor(private _cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this._cartService.getItems();
  }

  addItemToCart() {
    console.log(this.newItemTitle)
    this._cartService.addItem(this.newItemTitle);
  }

}

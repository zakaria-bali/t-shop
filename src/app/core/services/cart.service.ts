import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  calculateTotal(items: CartItem[]) {
    let total = 0;

    items.forEach((item: CartItem) => {
      total += item.quantity * item.product.price;
    })

    return total;
  }
}

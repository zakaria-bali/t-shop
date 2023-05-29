import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartForm: FormGroup = new FormGroup({
    items: new FormArray([])
  })

  constructor() { }


  calculateTotal(items: CartItem[]) {
    let total = 0;

    items.forEach((item: CartItem) => {
      total += item.quantity * item.product.price;
    })

    return total;
  }

  itemsToFormArray(items: CartItem[]) {
    this.items.setValue([]);
    items.forEach((item: CartItem) => {
      this.items.controls.push(
        new FormControl(item)
      )
    })
  }

  get items(): FormArray {
    return this.cartForm.get('items') as FormArray;
  }
}

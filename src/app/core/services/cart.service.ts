import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartForm: FormGroup = new FormGroup({
    items: new FormArray([])
  })

  constructor() { }


  calculateTotal() {
    let total = 0;
    if (this.items.controls) {
      this.items.controls.forEach((item: AbstractControl) => {
        total += item.value.quantity * item.value.product.price;
      })
    }

    return total;
  }

  itemsToFormArray(items: CartItem[]) {
    this.items.controls = [];
    items.forEach((item: CartItem) => {
      this.items.controls.push(
        new FormControl(item)
      )
    })
  }

  get items(): FormArray {
    return this.cartForm.get('items') as FormArray;
  }

  removeProductControl(id: number | string) {
    const index = this.items.value.findIndex((item: CartItem) => item.product.id === id)
    this.items.removeAt(index);
  }
}

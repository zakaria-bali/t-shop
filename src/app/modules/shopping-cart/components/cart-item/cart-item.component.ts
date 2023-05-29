import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CartItem } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements ControlValueAccessor {

  @Input({ required: true })
  cartItem: CartItem | undefined;

  isDisabled: boolean = false;

  onChange = (item: CartItem) => {};

  onTouched = () => {};

  writeValue(item: CartItem): void {
    if (item) {
      this.cartItem = item;
    }
  }
  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onQuantityChanged(quantity: number) {
    if (this.cartItem) {
      this.cartItem.quantity = quantity;
      this.onChange(this.cartItem);
    }

  }
}

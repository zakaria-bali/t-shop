import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CartItem } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CartItemComponent,
    },
  ],

})
export class CartItemComponent implements ControlValueAccessor {

  @Input()
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

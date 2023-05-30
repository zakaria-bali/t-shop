import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
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

  isDisabled: boolean = false;

  @Input()
  cartItem: CartItem | undefined;

  @Output()
  removeFromCart: EventEmitter<number|string> = new EventEmitter<number|string>()

  constructor(private modal: NzModalService) {

  }

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
      this.cartItem ={ ...this.cartItem, quantity }
      this.onChange(this.cartItem);
    }
  }

  removeItemClicked() {
    if (this.cartItem) {
      this.modal.confirm({
        nzTitle: `Are you sure you want to delete <strong>${this.cartItem.product.title}</strong> from the shopping cart?`,
        nzOkText: 'Yes',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => {
          this.removeFromCart.emit(this.cartItem?.product.id)
        },
        nzCancelText: 'No',
        nzOnCancel: () => {}
      });
    }

  }

}

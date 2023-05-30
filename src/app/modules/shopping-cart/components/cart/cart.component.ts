import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnChanges {

  private _total: number = 0;

  @Input()
  items: CartItem[] = [];

  @Output()
  removeFromCart: EventEmitter<number|string> = new EventEmitter<number|string>()

  get total(): number {
    this._total = this.cartService.calculateTotal();
    return this._total;
  }

  constructor(public cartService: CartService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
   if (this.items) {
    this.cartService.itemsToFormArray(this.items);
   }
  }


  onSubmit() {
    console.log('VALUE')
    console.log(this.cartService.cartForm.value);
  }

  onRemoveFromCart(id: string | number ) {
    this.cartService.removeProductControl(id);
    this.removeFromCart.emit(id);
  }
}

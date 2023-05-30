import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartItem, QuantityUpdate } from 'src/app/core/models/cart.model';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  quantity: number = 1

  @Input()
  product: Product | null = null;

  @Input()
  isLoading: boolean = false;

  @Input()
  errorMessage: string = '';

  @Input()
  selectedProductsIds: (string|number)[] = []

  @Output()
  addToCart: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  @Output()
  removeFromCart: EventEmitter<number | string> = new EventEmitter<number | string>();

  @Output()
  quantityChanged: EventEmitter<QuantityUpdate> = new EventEmitter<QuantityUpdate>()

  addToCartClicked() {
    if (this.product) {
      this.addToCart.emit({ quantity: this.quantity, product: this.product })
    }
  }

  removeFromCartClicked() {
    if (this.product) {
      this.removeFromCart.emit(this.product.id);
    }
  }

  onQuantityChanged(quantity: number) {
    if (this.product && this.selectedProductsIds.includes(this.product.id)) {
      this.quantityChanged.emit({ quantity, id: this.product.id });
    }
  }

}

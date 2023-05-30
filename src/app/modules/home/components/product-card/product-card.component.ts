import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  product: Product | undefined;

  @Input()
  selectedProductsIds: (string|number)[] = []

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  removeFromCart: EventEmitter<number | string> = new EventEmitter<number | string>();

  addToCartClicked() {
    if (this.product) {
      this.addToCart.emit(this.product)
    }
  }

  removeFromCartClicked() {
    if (this.product) {
      this.removeFromCart.emit(this.product.id);
    }
  }

}

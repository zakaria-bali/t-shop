import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  searchKeyword: string = '';

  @Input()
  products: Product[] | null = null;

  @Input()
  errorMessage: string = ''

  @Input()
  isLoading: boolean = false;

  @Input()
  selectedProductsIds: (string|number)[] = []

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  removeFromCart: EventEmitter<string | number> = new EventEmitter< string | number >();

  onAddToCart(product: Product) {
    this.addToCart.emit(product);
  }

  onRemoveFromCart(id: number | string) {
    this.removeFromCart.emit(id);
  }

}

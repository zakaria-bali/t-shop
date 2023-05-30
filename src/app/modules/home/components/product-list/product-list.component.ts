import { Component, Input } from '@angular/core';
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

}

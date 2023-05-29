import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-simple-product-card',
  templateUrl: './simple-product-card.component.html',
  styleUrls: ['./simple-product-card.component.scss']
})
export class SimpleProductCardComponent {

  @Input({ required: true })
  product: Product | undefined;

  @Input()
  isCart: boolean = false;

}

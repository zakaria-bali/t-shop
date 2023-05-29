import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input({ required: true })
  cartItem: CartItem | undefined;
}

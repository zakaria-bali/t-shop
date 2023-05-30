import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/core/models/cart.model';
import { ShoppingCartFeature } from './state';
import { ShoppingCartActions } from './state/actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.shell.html',
  styleUrls: ['./shopping-cart.shell.scss']
})
export class ShoppingCartShell {

  items$: Observable<CartItem[]> = this.store.select(ShoppingCartFeature.selectItems);

  constructor(private store: Store) {

  }

  onRemoveFromCart(id: string | number) {
    this.store.dispatch(ShoppingCartActions.removeItemFromCart({ id }));
  }
}

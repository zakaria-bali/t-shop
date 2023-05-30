import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomeActions } from './state/actions';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { HomeFeature } from './state';
import { ShoppingCartActions } from '../shopping-cart/state/actions';
import { getCartProductsIDs } from '../shopping-cart/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.shell.html',
  styleUrls: ['./home.shell.scss'],
})
export class HomeShell implements OnInit {
  products$: Observable<Product[] | null> = this.store.select(HomeFeature.selectProducts);
  isLoading$: Observable<boolean> = this.store.select(HomeFeature.selectIsLoading);
  errorMessage$: Observable<string> = this.store.select(HomeFeature.selectErrorMessage);
  selectedProductsIds$: Observable<(string | number)[]> = this.store.select(getCartProductsIDs);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(HomeActions.loadProducts());
  }

  onAddToCart(product: Product) {
    this.store.dispatch(ShoppingCartActions.addItemToCart({ item: { quantity: 1, product } }));
  }

  onRemoveFromCart(id: number | string) {
    this.store.dispatch(ShoppingCartActions.removeItemFromCart({ id }))
  }

}

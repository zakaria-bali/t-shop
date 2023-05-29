import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomeActions } from './state/actions';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { HomeFeature } from './state';

@Component({
  selector: 'app-home',
  templateUrl: './home.shell.html',
  styleUrls: ['./home.shell.scss'],
})
export class HomeShell implements OnInit {
  products$: Observable<Product[] | null> = this.store.select(HomeFeature.selectProducts);
  isLoading$: Observable<boolean> = this.store.select(HomeFeature.selectIsLoading);
  errorMessage$: Observable<string> = this.store.select(HomeFeature.selectErrorMessage);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(HomeActions.loadProducts());
  }

}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCartSize } from './modules/shopping-cart/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'T-Shop';

  cartSize$: Observable<number> = this.store.select(getCartSize);

  constructor(private store: Store) {

  }
}

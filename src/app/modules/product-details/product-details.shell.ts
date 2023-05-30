import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { ProductDetailsFeature } from './state';
import { ProductDetailsActions } from './state/actions';
import { ActivatedRoute } from '@angular/router';
import { getCartProductsIDs } from '../shopping-cart/state';
import { CartItem, QuantityUpdate } from 'src/app/core/models/cart.model';
import { ShoppingCartActions } from '../shopping-cart/state/actions';
import { Review } from 'src/app/core/models/review.model';

@Component({
  selector: 'app-product-details-shell',
  templateUrl: './product-details.shell.html',
  styleUrls: ['./product-details.shell.scss']
})
export class ProductDetailsShell implements OnInit {
  product$: Observable<Product | null> = this.store.select(ProductDetailsFeature.selectProduct)
  isLoadingProduct$: Observable<boolean> = this.store.select(ProductDetailsFeature.selectIsLoadingProduct);
  productErrorMessage$: Observable<string> = this.store.select(ProductDetailsFeature.selectProductErrorMessage);
  selectedProductsIds$: Observable<(string | number)[]> = this.store.select(getCartProductsIDs);
  relatedProducts$: Observable<Product[] | null> = this.store.select(ProductDetailsFeature.selectRelatedProducts);
  isLoadingRelatedProducts$: Observable<boolean> = this.store.select(ProductDetailsFeature.selectIsLoadingRelatedProducts);
  relatedProductsErrorMessage$: Observable<string> = this.store.select(ProductDetailsFeature.selectRelatedProductsErrorMessage);
  reviews$: Observable<Review[] | null> = this.store.select(ProductDetailsFeature.selectReviews);
  isLoadingReviews$: Observable<boolean> = this.store.select(ProductDetailsFeature.selectIsLoadingReviews);
  reviewsErrorMessage$: Observable<string> = this.store.select(ProductDetailsFeature.selectReviewsErrorMessage);

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(ProductDetailsActions.loadProductDetails({ id: this.route.snapshot.paramMap.get('id') ?? -1 }))
  }

  onAddToCart(item: CartItem) {
    this.store.dispatch(ShoppingCartActions.addItemToCart({ item }));
  }

  onRemoveFromCart(id: string | number) {
    this.store.dispatch(ShoppingCartActions.removeItemFromCart({ id }));
  }

  onQuantityChanged(quantityUpdate: QuantityUpdate) {
    this.store.dispatch(ShoppingCartActions.updateProductQuantity( { quantityUpdate } ))
  }

}

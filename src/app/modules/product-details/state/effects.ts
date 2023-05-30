import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductDetailsService } from "src/app/core/services/product-details.service";
import { ProductDetailsActions } from "./actions";
import { catchError, map, mergeMap, of } from "rxjs";


export const loadProductDetails$ = createEffect(() => {
  const actions$ = inject(Actions);
  const productDetailsService: ProductDetailsService = inject(ProductDetailsService);
  return actions$.pipe(
    ofType(ProductDetailsActions.loadProductDetails),
    mergeMap(
      (action) => productDetailsService.getProductDetails(action.id).pipe(
        map((product) => ProductDetailsActions.loadProductDetailsSuccess({ product })),
        catchError((error) => of(ProductDetailsActions.loadProductDetailsFail({ errorMessage: error.error.detail })))
      )
    )
  )
}, { functional: true });

export const dispatchLoadRelatedProducts$ = createEffect(() => {
  const actions$ = inject(Actions);
  return actions$.pipe(
    ofType(ProductDetailsActions.loadProductDetailsSuccess),
    map((action) => ProductDetailsActions.loadRelatedProducts({ category: action.product.category }))
  )
}, { functional: true });

export const dispatchLoadRelatedProductsFail$ = createEffect(() => {
  const actions$ = inject(Actions);
  return actions$.pipe(
    ofType(ProductDetailsActions.loadProductDetailsFail),
    map((action) => ProductDetailsActions.loadProductDetailsFail({ errorMessage: "Product loading fail" }))
  )
}, { functional: true });

export const loadRelatedProduct$ = createEffect(() => {
  const actions$ = inject(Actions);
  const productDetailsService = inject(ProductDetailsService);
  return actions$.pipe(
    ofType(ProductDetailsActions.loadRelatedProducts),
    mergeMap((action) => productDetailsService.getRelatedProducts(action.category).pipe(
      map((products) => ProductDetailsActions.loadRelatedProductsSuccess({ products })),
      catchError((error) => of(ProductDetailsActions.loadRelatedProductsFail({ errorMessage: error.error.detail })))
    ))
  )
}, { functional: true })



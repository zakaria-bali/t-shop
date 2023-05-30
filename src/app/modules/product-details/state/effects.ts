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

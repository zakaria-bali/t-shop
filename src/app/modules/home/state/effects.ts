import { HomeService } from './../../../core/services/home.service';
import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HomeActions } from './actions';
import { catchError, map, mergeMap, of } from 'rxjs';

export const loadProducts$ = createEffect(
  () => {
    const actions$ = inject(Actions);
    const homeService = inject(HomeService);

    return actions$.pipe(
      ofType(HomeActions.loadProducts),
      mergeMap((action) => homeService.getProducts().pipe(
        map((products) => HomeActions.loadProductsSuccess({ products })),
        catchError((error) => of(HomeActions.loadProductsFail({ errorMessage: error.error.detail })))
      ))
    )
  }, { functional: true }
)

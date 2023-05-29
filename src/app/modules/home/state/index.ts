import { createFeature, createReducer, on } from "@ngrx/store";
import { Product } from "src/app/core/models/product.model";
import { HomeActions } from "./actions";


export interface HomeState {
  products: Product[] | null;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: HomeState = {
  products: null,
  isLoading: false,
  errorMessage: ''
}

export const HomeFeature = createFeature({
  name: 'Home',
  reducer: createReducer(
    initialState,
    on(HomeActions.loadProducts, (state) => ({ ...state, isLoading: true })),
    on(HomeActions.loadProductsSuccess, (state, action) => ({ ...state, isLoading: false, products: action.products, errorMessage: '' })),
    on(HomeActions.loadProductsFail, (state, action) => ({ ...state, isLoading: false, products: null, errorMessage: action.errorMessage })),
  )
})

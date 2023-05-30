import { createFeature, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { CartItem } from "src/app/core/models/cart.model";
import { ShoppingCartActions } from "./actions";



export interface ShoppingCartState {
  items: CartItem[]
}

const initialState: ShoppingCartState = {
  items: []
}

export const ShoppingCartFeature = createFeature({
  name: 'ShoppingCart',
  reducer: createReducer(
    initialState,
    on(ShoppingCartActions.addItemToCart, (state, action) => {
      if (isCartContainItem(state.items, action.item.product.id)) {
        return { ...state }
      }
      return {
        ...state,
        items: [...state.items, action.item]
      }
    }),
    on(ShoppingCartActions.removeItemFromCart, (state, action) => {

      return {
        ...state,
        items: [ ...state.items.filter((item) => item.product.id !== action.id)]
      }

    })
  )
})

const isCartContainItem = (items: CartItem[], id: number | string) => {

  for(let item of items) {
    if (item.product.id === id) {
      return true;
    }
  }

  return false;
}

const getShoppingCartFeatureState = createFeatureSelector<ShoppingCartState>('ShoppingCart');

export const getCartSize = createSelector(
  getShoppingCartFeatureState,
  (state) => state.items.length
)

export const getCartProductsIDs = createSelector(
  getShoppingCartFeatureState,
  (state) => state.items.map((item) => item.product.id)
)



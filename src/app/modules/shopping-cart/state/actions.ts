import { createActionGroup, props } from "@ngrx/store";
import { CartItem, QuantityUpdate } from "src/app/core/models/cart.model";


export const ShoppingCartActions = createActionGroup({
  source: '[Shopping Cart Shell | Home Shell | Product Details]',
  events: {
    'Add Item To Cart': props<{ item: CartItem }>(),
    'Remove Item From Cart': props<{ id: number | string}>(),
    'Update Product Quantity': props<{ quantityUpdate: QuantityUpdate }>()
  }
})

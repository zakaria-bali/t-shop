import { createActionGroup, props } from "@ngrx/store";
import { Product } from "src/app/core/models/product.model";
import { Review } from "src/app/core/models/review.model";


export const ProductDetailsActions = createActionGroup({
  source: '[Product Details Shell]',
  events: {
    'Load Product Details': props<{ id: string | number }>(),
    'Load Product Details Success': props<{ product: Product }>(),
    'Load Product Details Fail': props<{ errorMessage: string }>(),
    'Load Product Reviews': props<{ id: number | string }>(),
    'Load Product Reviews Success': props<{ reviews: Review[] }>(),
    'Load Product Reviews Fail': props<{ errorMessage: string }>(),
    'Load Related Products': props<{ category: string }>(),
    'Load Related Products Success': props<{ products: Product[] }>(),
    'Load Related Products Fail': props<{ errorMessage: string }>(),
  }
})

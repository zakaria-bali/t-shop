import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "src/app/core/models/product.model";


export const HomeActions = createActionGroup({
  source: '[Home Shell]',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Fail': props<{ errorMessage: string }>()
  }
})

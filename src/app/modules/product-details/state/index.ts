import { ProductDetailsActions } from './actions';
import { createFeature, createReducer, on } from "@ngrx/store";
import { Product } from "src/app/core/models/product.model";
import { Review } from "src/app/core/models/review.model";


export interface ProductDetailsState {
  product: Product | null;
  isLoadingProduct: boolean;
  productErrorMessage: string;
  relatedProducts: Product[] | null;
  isLoadingRelatedProducts: boolean;
  relatedProductsErrorMessage: string;
  reviews: Review[] | null;
  isLoadingReviews: boolean;
  reviewsErrorMessage: string;
}

const initialState: ProductDetailsState = {
  product: null,
  isLoadingProduct: false,
  productErrorMessage: '',
  relatedProducts: null,
  isLoadingRelatedProducts: false,
  relatedProductsErrorMessage: '',
  reviews: null,
  isLoadingReviews: false,
  reviewsErrorMessage: ''
};

export const ProductDetailsFeature = createFeature({
  name: 'ProuctDetails',
  reducer: createReducer(
    initialState,
    on(ProductDetailsActions.loadProductDetails, (state) => ({ ...state, isLoadingProduct: true })),
    on(ProductDetailsActions.loadProductDetailsSuccess, (state, action) => ({ ...state, isLoadingProduct: false, product: action.product })),
    on(ProductDetailsActions.loadProductDetailsFail, (state, action) => ({ ...state, isLoadingProduct: false, productErrorMessage: action.errorMessage })),
    on(ProductDetailsActions.loadProductReviews, (state) => ({ ...state, isLoadingReviews: true })),
    on(ProductDetailsActions.loadProductReviewsSuccess, (state, action) => ({ ...state, isLoadingReviews: false, reviews: action.reviews })),
    on(ProductDetailsActions.loadProductReviewsFail, (state, action) => ({ ...state, isLoadingReviews: false, reviewsErrorMessage: action.errorMessage })),
    on(ProductDetailsActions.loadRelatedProducts, (state) => ({ ...state, isLoadingRelatedProducts: true })),
    on(ProductDetailsActions.loadRelatedProductsSuccess, (state, action) => ({ ...state, isLoadingRelatedProducts: false, relatedProducts: action.products })),
    on(ProductDetailsActions.loadRelatedProductsFail, (state, action) => ({ ...state, isLoadingRelatedProducts: false, relatedProductsErrorMessage: action.errorMessage })),
  )
})



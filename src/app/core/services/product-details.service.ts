import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment.development';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  getProductDetails(id: number | string): Observable<Product> {
    return this.http.get<Product>(`${environment.BASE_URL}/products/${id}`);
  }

  getRelatedProducts(category: string): Observable<Product[]> {
    // For the best practices the url it should be /products?category="name"
    return this.http.get<Product[]>(`${environment.BASE_URL}/${category}`);
  }

  getProductReviews(id: number | string): Observable<Review[]> {
    // For the best practices the url it should be /product-reviews/10
    return this.http.get<Review[]>(`${environment.BASE_URL}/${id}`)
  }
}

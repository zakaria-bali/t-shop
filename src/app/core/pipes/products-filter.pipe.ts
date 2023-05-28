import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
  transform(products: Product[], searchKeywords: string): Product[] {
    if (!searchKeywords) {
      return products;
    }
    return products.filter(
      (p: Product) =>
        p.title
          .toLocaleLowerCase()
          .includes(searchKeywords.toLocaleLowerCase()) ||
        p.shortDescription
          .toLocaleLowerCase()
          .includes(searchKeywords.toLocaleLowerCase()) ||
        p.description
          .toLocaleLowerCase()
          .includes(searchKeywords.toLocaleLowerCase())
    );
  }
}

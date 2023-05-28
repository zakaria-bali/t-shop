import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productDescription: string = `<p>The Lounge Chair is a stylish and comfortable piece of furniture designed to provide relaxation and comfort. It is typically characterized by its low, wide seat, reclined backrest, and supportive armrests. With its sophisticated design and ergonomic features, the Lounge Chair has become a popular choice for various settings, including living rooms, bedrooms, offices, and even outdoor spaces like patios or sunrooms.</p>

  <p>The Lounge Chair often features a sturdy frame made of wood, metal, or a combination of both. The frame provides stability and support for the seat and backrest. The seat itself is generously padded with high-quality foam or other cushioning materials to ensure a plush and comfortable seating experience. The upholstery of the Lounge Chair can vary, ranging from luxurious fabrics like velvet or leather to more casual options like linen or cotton. The choice of upholstery material can greatly influence the overall style and aesthetic of the chair.</p>

  <p>One of the defining features of the Lounge Chair is its reclined backrest. This allows the user to lean back and adopt a more relaxed position, perfect for unwinding after a long day or enjoying a good book. The backrest is often adjustable, allowing users to find their preferred angle of recline. Some Lounge Chairs also come with a built-in headrest or a separate cushion for added neck and head support.</p>`

  quantity: number = 1
}

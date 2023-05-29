import { Component } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items: CartItem[] =  [
    {
      quantity: 3,
      product: {
        id: 1,
        title: 'Lounge Chair',
        price: 68,
        category: 'furniture',
        imageUrl: 'assets/images/lounge-chair.png',
        shortDescription: 'Comfortable seating for relaxation and lounging.',
        description: `<p>The Lounge Chair is a stylish and comfortable piece of furniture designed to provide relaxation and comfort. It is typically characterized by its low, wide seat, reclined backrest, and supportive armrests. With its sophisticated design and ergonomic features, the Lounge Chair has become a popular choice for various settings, including living rooms, bedrooms, offices, and even outdoor spaces like patios or sunrooms.</p>

        <p>The Lounge Chair often features a sturdy frame made of wood, metal, or a combination of both. The frame provides stability and support for the seat and backrest. The seat itself is generously padded with high-quality foam or other cushioning materials to ensure a plush and comfortable seating experience. The upholstery of the Lounge Chair can vary, ranging from luxurious fabrics like velvet or leather to more casual options like linen or cotton. The choice of upholstery material can greatly influence the overall style and aesthetic of the chair.</p>

        <p>One of the defining features of the Lounge Chair is its reclined backrest. This allows the user to lean back and adopt a more relaxed position, perfect for unwinding after a long day or enjoying a good book. The backrest is often adjustable, allowing users to find their preferred angle of recline. Some Lounge Chairs also come with a built-in headrest or a separate cushion for added neck and head support.</p>`,
      }
    },
    {
      quantity: 2,
      product: {
        id: 2,
        title: 'Cover Armchair',
        price: 450,
        category: 'furniture',
        imageUrl: 'assets/images/cover-armchair.png',
        shortDescription: 'Comfortable, Stylish, Cozy, Armchair for Relaxation.',
        description: `The Cover Armchair is a meticulously designed and meticulously crafted piece of furniture that combines comfort, style, and functionality. This armchair is a perfect addition to any living room, bedroom, or reading corner, providing a cozy and inviting seating option.

        The Cover Armchair features a sturdy frame constructed from high-quality materials such as wood or metal. The frame ensures durability and stability, allowing the armchair to withstand daily use and provide long-lasting comfort. The seat and backrest are generously padded with plush foam or other cushioning materials, ensuring a soft and supportive sitting experience.

        One of the standout features of the Cover Armchair is its ergonomic design. The backrest is contoured to provide optimal lumbar support, promoting proper posture and reducing strain on the back. The armrests are positioned at a comfortable height, allowing for relaxed arm and shoulder positioning. These thoughtful design elements contribute to a comfortable and relaxing seating experience, making the armchair ideal for extended periods of reading, lounging, or simply unwinding.`,
      },
    }
  ]

}

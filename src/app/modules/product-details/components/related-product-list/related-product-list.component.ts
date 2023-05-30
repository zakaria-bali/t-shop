import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-related-product-list',
  templateUrl: './related-product-list.component.html',
  styleUrls: ['./related-product-list.component.scss']
})
export class RelatedProductListComponent {

  @Input()
  products: Product[] | null = null;

  @Input()
  isLoading: boolean = false;

  @Input()
  errorMessage: string = '';
  
  // = [
  //   {
  //     id: 1,
  //     title: 'Lounge Chair',
  //     price: 68,
  //     category: 'furniture',
  //     imageUrl: 'assets/images/lounge-chair.png',
  //     shortDescription: 'Comfortable seating for relaxation and lounging.',
  //     description: `<p>The Lounge Chair is a stylish and comfortable piece of furniture designed to provide relaxation and comfort. It is typically characterized by its low, wide seat, reclined backrest, and supportive armrests. With its sophisticated design and ergonomic features, the Lounge Chair has become a popular choice for various settings, including living rooms, bedrooms, offices, and even outdoor spaces like patios or sunrooms.</p>

  //     <p>The Lounge Chair often features a sturdy frame made of wood, metal, or a combination of both. The frame provides stability and support for the seat and backrest. The seat itself is generously padded with high-quality foam or other cushioning materials to ensure a plush and comfortable seating experience. The upholstery of the Lounge Chair can vary, ranging from luxurious fabrics like velvet or leather to more casual options like linen or cotton. The choice of upholstery material can greatly influence the overall style and aesthetic of the chair.</p>

  //     <p>One of the defining features of the Lounge Chair is its reclined backrest. This allows the user to lean back and adopt a more relaxed position, perfect for unwinding after a long day or enjoying a good book. The backrest is often adjustable, allowing users to find their preferred angle of recline. Some Lounge Chairs also come with a built-in headrest or a separate cushion for added neck and head support.</p>`,
  //   },
  //   {
  //     id: 2,
  //     title: 'Cover Armchair',
  //     price: 450,
  //     category: 'furniture',
  //     imageUrl: 'assets/images/cover-armchair.png',
  //     shortDescription: 'Comfortable, Stylish, Cozy, Armchair for Relaxation.',
  //     description: `The Cover Armchair is a meticulously designed and meticulously crafted piece of furniture that combines comfort, style, and functionality. This armchair is a perfect addition to any living room, bedroom, or reading corner, providing a cozy and inviting seating option.

  //     The Cover Armchair features a sturdy frame constructed from high-quality materials such as wood or metal. The frame ensures durability and stability, allowing the armchair to withstand daily use and provide long-lasting comfort. The seat and backrest are generously padded with plush foam or other cushioning materials, ensuring a soft and supportive sitting experience.

  //     One of the standout features of the Cover Armchair is its ergonomic design. The backrest is contoured to provide optimal lumbar support, promoting proper posture and reducing strain on the back. The armrests are positioned at a comfortable height, allowing for relaxed arm and shoulder positioning. These thoughtful design elements contribute to a comfortable and relaxing seating experience, making the armchair ideal for extended periods of reading, lounging, or simply unwinding.`,
  //   },
  //   {
  //     id: 3,
  //     title: 'Decorative Office Seat',
  //     price: 125,
  //     category: 'furniture',
  //     imageUrl: 'assets/images/decorative-office-seat.png',
  //     shortDescription: 'Elegant, Stylish, Decorative Office Seat.',
  //     description: `The Decorative Office Seat is a stylish and sophisticated seating option designed to enhance the aesthetics of any office space while providing comfort and functionality. With its elegant design and attention to detail, this seat adds a touch of refinement and professionalism to any workplace setting.

  //     The Decorative Office Seat features a sturdy frame constructed from high-quality materials such as metal or wood, ensuring durability and stability. The seat and backrest are generously padded with plush foam or other cushioning materials, providing a comfortable and supportive sitting experience during long hours of work.

  //     One of the standout features of the Decorative Office Seat is its decorative elements. The seat is adorned with intricate patterns, elegant stitching, or decorative accents that elevate its visual appeal and make it a statement piece in the office. These decorative details add a touch of sophistication and personality to the seat, creating a visually pleasing focal point in the workspace.

  //     `,
  //   },
  //   {
  //     id: 4,
  //     title: 'Indoor Planter',
  //     price: 30,
  //     category: 'furniture',
  //     imageUrl: 'assets/images/indoor-planter.png',
  //     shortDescription: 'Stylish, Functional Indoor Planter for Greenery.',
  //     description: `The Indoor Planter is a versatile and functional container designed specifically for housing and showcasing plants and greenery within indoor spaces. With its thoughtful design and practical features, the indoor planter serves as an ideal solution for adding a touch of nature and beauty to any interior environment.

  //     The Indoor Planter is typically crafted from durable materials such as ceramic, terracotta, wood, or even modern materials like fiberglass or plastic. These materials ensure the planter's longevity, allowing it to withstand the indoor conditions and provide a stable environment for plants to thrive. The planter may come in various shapes, sizes, and designs to suit different preferences and complement diverse interior styles.

  //     One of the key features of the Indoor Planter is its functionality. It is equipped with a built-in drainage system or a removable tray to collect excess water, preventing overwatering and ensuring proper plant care. This feature helps to maintain the health of the plants by preventing root rot and waterlogging. Additionally, some planters may include a saucer or a built-in reservoir to store water, providing a self-watering capability and reducing the frequency of watering required.`,
  //   }
  // ];




}

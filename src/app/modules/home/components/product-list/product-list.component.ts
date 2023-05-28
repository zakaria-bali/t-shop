import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  searchKeyword: string = '';

  products: Product[] = [
    {
      id: 1,
      title: 'Lounge Chair',
      price: 68,
      category: 'furniture',
      imageUrl: 'assets/images/lounge-chair.png',
      shortDescription: 'Comfortable seating for relaxation and lounging.',
      description: `The Lounge Chair is a stylish and comfortable piece of furniture designed to provide relaxation and comfort. It is typically characterized by its low, wide seat, reclined backrest, and supportive armrests. With its sophisticated design and ergonomic features, the Lounge Chair has become a popular choice for various settings, including living rooms, bedrooms, offices, and even outdoor spaces like patios or sunrooms.

      The Lounge Chair often features a sturdy frame made of wood, metal, or a combination of both. The frame provides stability and support for the seat and backrest. The seat itself is generously padded with high-quality foam or other cushioning materials to ensure a plush and comfortable seating experience. The upholstery of the Lounge Chair can vary, ranging from luxurious fabrics like velvet or leather to more casual options like linen or cotton. The choice of upholstery material can greatly influence the overall style and aesthetic of the chair.

      One of the defining features of the Lounge Chair is its reclined backrest. This allows the user to lean back and adopt a more relaxed position, perfect for unwinding after a long day or enjoying a good book. The backrest is often adjustable, allowing users to find their preferred angle of recline. Some Lounge Chairs also come with a built-in headrest or a separate cushion for added neck and head support.`,
    },
    {
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
    {
      id: 3,
      title: 'Decorative Office Seat',
      price: 125,
      category: 'furniture',
      imageUrl: 'assets/images/decorative-office-seat.png',
      shortDescription: 'Elegant, Stylish, Decorative Office Seat.',
      description: `The Decorative Office Seat is a stylish and sophisticated seating option designed to enhance the aesthetics of any office space while providing comfort and functionality. With its elegant design and attention to detail, this seat adds a touch of refinement and professionalism to any workplace setting.

      The Decorative Office Seat features a sturdy frame constructed from high-quality materials such as metal or wood, ensuring durability and stability. The seat and backrest are generously padded with plush foam or other cushioning materials, providing a comfortable and supportive sitting experience during long hours of work.

      One of the standout features of the Decorative Office Seat is its decorative elements. The seat is adorned with intricate patterns, elegant stitching, or decorative accents that elevate its visual appeal and make it a statement piece in the office. These decorative details add a touch of sophistication and personality to the seat, creating a visually pleasing focal point in the workspace.

      `,
    },
    {
      id: 4,
      title: 'Indoor Planter',
      price: 30,
      category: 'furniture',
      imageUrl: 'assets/images/indoor-planter.png',
      shortDescription: 'Stylish, Functional Indoor Planter for Greenery.',
      description: `The Indoor Planter is a versatile and functional container designed specifically for housing and showcasing plants and greenery within indoor spaces. With its thoughtful design and practical features, the indoor planter serves as an ideal solution for adding a touch of nature and beauty to any interior environment.

      The Indoor Planter is typically crafted from durable materials such as ceramic, terracotta, wood, or even modern materials like fiberglass or plastic. These materials ensure the planter's longevity, allowing it to withstand the indoor conditions and provide a stable environment for plants to thrive. The planter may come in various shapes, sizes, and designs to suit different preferences and complement diverse interior styles.

      One of the key features of the Indoor Planter is its functionality. It is equipped with a built-in drainage system or a removable tray to collect excess water, preventing overwatering and ensuring proper plant care. This feature helps to maintain the health of the plants by preventing root rot and waterlogging. Additionally, some planters may include a saucer or a built-in reservoir to store water, providing a self-watering capability and reducing the frequency of watering required.`,
    },
    {
      id: 5,
      title: 'Milk Frother',
      price: 30,
      category: 'accessories',
      imageUrl: 'assets/images/milk-frother.png',
      shortDescription: 'Efficient, Portable Milk Frother for Lattes.',
      description: `The Milk Frother is a compact and versatile kitchen appliance designed to create creamy and frothy milk for a variety of beverages. This handy device is perfect for coffee lovers, as it allows them to enjoy professional-quality lattes, cappuccinos, and hot chocolates right in the comfort of their own home.

      The Milk Frother operates with ease, making the frothing process quick and efficient. It typically consists of a handheld wand or a whisk-like attachment that rotates rapidly to aerate the milk and create a luxurious foam. The frother is powered by electricity or batteries, providing the necessary speed and power to achieve the desired froth consistency.

      Using the Milk Frother is simple and straightforward. First, the user pours cold or warm milk into a suitable container, ensuring not to exceed the maximum fill line. Then, the frother's wand or whisk is immersed in the milk, and with the press of a button or the activation of a switch, the frothing process begins. Within seconds, the milk transforms into a velvety foam with a rich texture.`,
    },
    {
      id: 6,
      title: 'Pedal Bin',
      price: 78,
      category: 'accessories',
      imageUrl: 'assets/images/pedal-bin.png',
      shortDescription: 'Convenient, Hands-free Pedal Bin for Waste.',
      description: `The Pedal Bin is a practical and efficient waste disposal solution designed for convenience and cleanliness. This bin is equipped with a pedal mechanism that allows for hands-free operation, making it a hygienic choice for disposing of trash in various settings, including kitchens, bathrooms, offices, and more.

      The Pedal Bin is typically constructed from durable materials such as stainless steel, plastic, or a combination of both. The sturdy build ensures the bin's longevity and resistance to wear and tear. It is available in different sizes, ranging from compact options suitable for small spaces to larger bins for high-volume waste disposal.

      One of the key features of the Pedal Bin is its foot pedal mechanism. Located at the base of the bin, the pedal allows users to open the lid with a simple step, eliminating the need for direct hand contact. This hands-free operation promotes hygiene by minimizing the transfer of germs and bacteria, especially when handling kitchen waste or personal care products in the bathroom.`,
    },
    {
      id: 7,
      title: 'Foot Rest',
      price: 52,
      category: 'accessories',
      imageUrl: 'assets/images/foot-rest.png',
      shortDescription: 'Comfortable, Ergonomic Foot Rest for Relaxation.',
      description: `The Foot Rest is a versatile and ergonomic accessory designed to provide comfort and support for the feet while sitting. This functional and adjustable device offers a range of benefits, including improved posture, reduced strain on the legs and lower back, and enhanced overall comfort.

      The Foot Rest typically features a sturdy construction and a platform that is wide enough to accommodate both feet comfortably. It is often adjustable in height, allowing users to customize the position of the footrest to their desired level of comfort. This adjustability ensures that the footrest can be positioned at an optimal height, promoting proper alignment and reducing the risk of discomfort or fatigue.

      Using a Foot Rest offers several ergonomic advantages. By elevating the feet, it helps to alleviate pressure on the legs, reducing the strain on muscles and joints caused by prolonged sitting. The footrest encourages a more natural and relaxed posture, with the feet slightly raised and supported. This helps to distribute weight more evenly and can relieve tension in the lower back and hips, enhancing overall comfort during extended periods of sitting.`,
    },
    {
      id: 8,
      title: 'Hook For Door',
      price: 52,
      category: 'accessories',
      imageUrl: 'assets/images/hook-for-door.png',
      shortDescription: 'Convenient, Versatile Door Hook for Organization.',
      description: `The Hook for Door is a practical and versatile organizational accessory designed to maximize space and efficiency in various settings. This simple yet effective device offers a convenient solution for hanging and storing items securely on doors, making it a valuable addition to homes, offices, dorm rooms, or any space where efficient storage is needed.

      The Hook for Door is typically made from durable materials such as metal, plastic, or a combination of both, ensuring its strength and longevity. It features a hook or multiple hooks that can be easily mounted over the top of a door, utilizing the unused space behind the door for storage purposes. The hook is designed to fit most standard doors and can support a range of items, from lightweight accessories to heavier items like coats, towels, bags, or even small organizers.

      One of the key advantages of the Hook for Door is its versatility. It provides a practical solution for organizing and decluttering spaces where floor or wall space may be limited. With the door serving as a vertical storage area, the hook allows for efficient utilization of otherwise unused space. It is particularly beneficial in small living areas or rooms with limited storage options, allowing users to make the most of available space.`,
    },
    {
      id: 9,
      title: 'Dish Drainer',
      price: 99,
      category: 'accessories',
      imageUrl: 'assets/images/dish-drainer.png',
      shortDescription: 'Efficient, Compact Dish Drainer for Drying.',
      description: `The Dish Drainer is a functional and practical kitchen accessory designed to facilitate the drying and organization of dishes, utensils, and other kitchenware. This essential tool helps to streamline the dishwashing process, allowing wet items to air dry efficiently while keeping the kitchen countertop clean and tidy.

      The Dish Drainer typically consists of a sturdy and durable base with elevated sections or slots for holding plates, bowls, glasses, and other items upright. It may also feature separate compartments or slots for utensils, providing designated spaces for efficient drying and organization. The drainer is usually made of materials such as plastic, stainless steel, or silicone, which are easy to clean and resistant to water damage.

      Using a Dish Drainer offers several advantages. Firstly, it allows freshly washed dishes to dry naturally, reducing the need for hand-drying and minimizing the risk of bacterial growth associated with damp kitchenware. By providing proper ventilation and airflow, the drainer helps to speed up the drying process, ensuring that dishes are ready for storage or immediate use.`,
    },
  ];
}

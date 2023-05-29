import { Component } from '@angular/core';
import { Review } from 'src/app/core/models/review.model';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent {
  reviews: Review[] = [
    {
      id: 1,
      name: "Mohamed Ali",
      publishDate: "2023-04-15",
      rate: 4.5,
      description: "Experience the epitome of comfort and sophistication with our Elegant Lounge Chair. Its sleek design and plush cushions will elevate your relaxation experience to new heights.",
      imageUrl: "assets/images/happy-person.jpg"
    },
    {
      id: 2,
      name: "Gilgamesh",
      publishDate: "2023-03-27",
      rate: 4.2,
      description: "Unwind in style with our Modern Luxe Lounger. Its ergonomic shape and premium upholstery will provide optimal comfort and add a touch of contemporary elegance to your space.",
      imageUrl: ""
    },
    {
      id: 3,
      name: "Kamado Tanjiro",
      publishDate: "2023-02-10",
      rate: 4.7,
      description: "Indulge in ultimate relaxation with our Classic Comfort Recliner. Its timeless design, adjustable reclining positions, and plush padding make it the perfect companion for cozy evenings.",
      imageUrl: ""
    },
  ];
}

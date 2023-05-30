import { Component, Input } from '@angular/core';
import { Review } from 'src/app/core/models/review.model';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent {
  @Input()
  reviews: Review[] | null = null;

  @Input()
  isLoading: boolean = false;

  @Input()
  errorMessage: string = ''

}

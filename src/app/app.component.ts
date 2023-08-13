import { AfterViewInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCartSize } from './modules/shopping-cart/state';
import { ShepherdService} from 'angular-shepherd';
import { steps  } from './shared/components/shepherd/shepherd.step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{
  title = 'T-Shop';

  cartSize$: Observable<number> = this.store.select(getCartSize);

  constructor(private store: Store, private shepherdService: ShepherdService) {

  }

  ngAfterViewInit(): void {
    this.shepherdService.defaultStepOptions = {
      classes: 'custom-class-name-1 custom-class-name-2',
      scrollTo: false,
      cancelIcon: {
        enabled: true
      }
    }
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(<any>steps);
    this.shepherdService.start();
  }
}

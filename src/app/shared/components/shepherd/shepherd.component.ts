import { AfterContentInit, Component } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';

@Component({
  selector: 'app-shepherd',
  templateUrl: './shepherd.component.html',
  styleUrls: ['./shepherd.component.scss']
})
export class ShepherdComponent implements AfterContentInit {

  constructor(private shepherdService: ShepherdService) {}

  ngAfterContentInit(): void {
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
  }

}

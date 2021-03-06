import { Component } from '@angular/core';
import { SOP } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-sops';
  sops: SOP[] = [
    {
      id: 0,
      title: 'Quality Manual',
      rev: '12',
      num: '1000',
  },
  {
    id: 1,
    title: 'Design Controls',
    rev: '1',
    num: '1001',
  },
  {
    id: 2,
    title: 'Purchasing Controls',
    rev: '3',
    num: '1002',
  },
  ]
}

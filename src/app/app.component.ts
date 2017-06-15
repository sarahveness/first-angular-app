import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gastown Cofeee';
  shop: Shop = {
    id: 1,
    name: 'Prado Cafe'
  };
}

export class Shop {
  id: number;
  name: string;
}

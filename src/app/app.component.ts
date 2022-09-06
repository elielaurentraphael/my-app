import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products = [
    {
      name:'Phone XL'
    },
    {
      name:'Phone Mini'
    },
    {
      name:'Phone Standart'
    }
  ];

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <ul>
    <li routerLink="/">Home</li>
    <li routerLink="/about">About</li>
  </ul>
  <hr/>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

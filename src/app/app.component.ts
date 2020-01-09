import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'animation-test';

  prepareRoute(outlet: RouterOutlet) {
    let result = outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    console.warn(result);
    return result;
  }

  constructor() {
    this.mainLoop();
  }

  mainLoop() {
    window.requestAnimationFrame(this.mainLoop.bind(this));
  }
}

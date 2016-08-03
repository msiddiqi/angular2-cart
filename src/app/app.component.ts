import { Component } from '@angular/core';
import { CartComponent} from './cart/cart.component'
import { CartService} from './cart.service'
import { environment } from './environment'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CartComponent],
  providers: [CartService]
})
export class AppComponent {
  title = 'Angular2 Cart';
  envColor = environment.envColor;
}

import { Component /*, ViewEncapsulation */ } from "@angular/core";
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from "./menu/menu";
import { Home } from "./home/home";
import { RouterOutlet } from "@angular/router";
import { Toast } from "./common/toast/toast";


@Component({
  selector: 'app-root',
  // encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports:[NgbAlertModule, Menu,/* Home,*/ RouterOutlet, Toast, ],
  templateUrl:'./app.html',
  styleUrl:'./app.scss',
})
export class App {
  // title = 'Workshops App';

  // changeTitle( newTitle:string ){
  //   this.title = newTitle;
  // }

}
export const x =100;



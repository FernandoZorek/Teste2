import { Component } from '@angular/core';
import { GpsService } from './gps.service';
import { AuthService } from './login/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test2';

  mostrarMenu: boolean = false;
  
  constructor (private authService: AuthService, 
    private GpsService: GpsService, private cookieService: CookieService) { }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    if(this.cookieService.get('tokenlogin') == 'tokenasergeradofuturamente'){
      this.mostrarMenu = true
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.scss']
})
export class SairComponent implements OnInit {


  constructor(private authService: AuthService, private cookieService: CookieService) {  }

  mostrarMenu: boolean = false;
  

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = false
    );
    this.cookieService.set('tokenlogin', '');
    alert('Logout Realizado!');
    window.location.href = "/";
  }

}

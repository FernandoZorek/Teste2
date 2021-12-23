import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarErroLoginEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private cookieService: CookieService) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'admin' && 
      usuario.senha === '123456') {
      this.cookieService.set('tokenlogin', 'tokenasergeradofuturamente');
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.mostrarErroLoginEmitter.emit(false);
      this.router.navigate(['/logado']);

    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.mostrarErroLoginEmitter.emit(true);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
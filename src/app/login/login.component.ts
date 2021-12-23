import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mostrarErroLogin: boolean = false;

  usuario: Usuario = new Usuario();


  constructor(private authService: AuthService) { }

  ngOnInit(){
    this.authService.mostrarErroLoginEmitter.subscribe(
      mostrar => this.mostrarErroLogin = mostrar
    );
  }

  fazerLogin(){
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario); 
  }

 

}

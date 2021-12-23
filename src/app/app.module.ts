import { CadastrosComponent } from './login/logado/cadastros/cadastros.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InscricaoComponent } from './inscricao/inscricao.component';
import { P404Component } from './p404/p404.component';
import { GpsService } from './gps.service';
import { FormulariosComponent } from './inscricao/formularios/formularios.component';
import { AuthService } from './login/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LogadoComponent } from './login/logado/logado.component';
import { FormListasComponent } from './login/logado/form-listas/form-listas.component';
import { FormActionComponent } from './login/logado/form-action/form-action.component';
import { SairComponent } from './sair/sair.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InscricaoComponent,
    P404Component,
    FormulariosComponent,
    LogadoComponent,
    FormListasComponent,
    FormActionComponent,
    SairComponent,
    CadastrosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [GpsService, AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

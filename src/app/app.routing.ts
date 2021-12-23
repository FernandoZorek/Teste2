import { CadastrosComponent } from './login/logado/cadastros/cadastros.component';
import { FormActionComponent } from './login/logado/form-action/form-action.component';
import { FormListasComponent } from './login/logado/form-listas/form-listas.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { SairComponent } from './sair/sair.component';


const APP_ROUTES: Routes = [
    { path: 'inscricao', component: FormListasComponent },
    { path: 'sair', component: SairComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logado', component: FormListasComponent },
    { path: 'cadastros', component: CadastrosComponent },
    { path: 'p404', component: P404Component },
    { path: 'logado/novo', component: FormActionComponent },
    { path: 'logado/editar/:id', component: FormActionComponent },
    { path: 'logado/cadastro/:id', component: FormActionComponent },
    { path: 'inscricao/cadastro/:id', component: FormActionComponent },
    { path: 'logado/deletar/:id', component: FormActionComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: P404Component }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

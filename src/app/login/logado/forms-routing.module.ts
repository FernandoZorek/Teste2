
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolverGuard } from './guards/resolver.guard';

const routes: Routes = [
  { path: '', component: CursosListaComponent },
  {
    path: 'novo',
    component: FormListasComponent,
    resolve: {
      form: ResolverGuard
    }
  },
  {
    path: 'editar/:id',
    component: FormListasComponent,
    resolve: {
      form: ResolverGuard
    }
  }
];
console.log('FORMS ROUTING')

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}

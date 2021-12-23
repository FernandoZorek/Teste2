import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, empty, Observable, Subject, switchMap, take } from 'rxjs';
import { FormsService } from '../forms.service';
import { Form } from '../form';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-form-listas',
  templateUrl: './form-listas.component.html',
  styleUrls: ['./form-listas.component.scss'],
  preserveWhitespaces: true,
})
export class FormListasComponent implements OnInit {
  forms$!: Observable<Form[]>;
  error$ = new Subject<boolean>();

  mostrarMenu: boolean = false;

  constructor(
    private service: FormsService,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.onRefresh();
    if(this.cookieService.get('tokenlogin') == 'tokenasergeradofuturamente'){
      this.mostrarMenu = true
    }
  }

  onRefresh() {
    this.forms$ = this.service.list().pipe(
      catchError((error) => {
        console.error(error);
        this.error$.next(true);
        alert(
          'Houve um erros para carregar os formulários, tente novamente mais tarde.'
        );
        return empty();
      })
    );
  }

  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onCadastro(id: any) {
    this.router.navigate(['cadastro', id], { relativeTo: this.route });
  }

  onDelete(id: any) {
    if (confirm('Deletar?') == true)  {
      this.service.delete(id).subscribe(
      (success) => {
        alert('Formulário deletado com sucesso!');
        this.onRefresh();
      },
      (error) => {
        alert('Houve um erro, tente novamente!');
      });}
    else{
      alert('Cancelado!');
    }
  }


}

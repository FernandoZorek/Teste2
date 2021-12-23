import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, empty, Observable, Subject } from 'rxjs';
import { FormsService } from '../forms.service';
import { Form2 } from '../form';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss'],
  preserveWhitespaces: true,
})
export class CadastrosComponent implements OnInit {

  forms2$!: Observable<Form2[]>;
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
    this.forms2$ = this.service.list2().pipe(
      catchError((error) => {
       // console.error(error);
        this.error$.next(true);
        alert(
          'Houve um erros para carregar os formulários, tente novamente mais tarde.'
        );
        return empty();
      })
    );
  }

}

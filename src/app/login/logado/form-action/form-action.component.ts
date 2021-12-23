import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { map, switchMap, exhaustMap } from 'rxjs/operators';

import { Subscription, Observable } from 'rxjs';
import { FormsService } from './../forms.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-form-action',
  templateUrl: './form-action.component.html',
  styleUrls: ['./form-action.component.scss'],
})
export class FormActionComponent implements OnInit {
  form!: FormGroup;
  form2!: FormGroup;
  submitted = false;

  mostrarMenu: boolean = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private FormsService: FormsService,
    private location: Location,
    private cookieService: CookieService
  ) {}


  
inscricao!: Subscription;
gpss : any[] | undefined;



  ngOnInit(): void {  

    const form = this.route.snapshot.data['form'];
    const form2 = this.route.snapshot.data['form2'];

    if(this.cookieService.get('tokenlogin') == 'tokenasergeradofuturamente'){
      this.mostrarMenu = true
    }
   
    this.route.params
    .pipe(
    map((params: any) => params['id']),
    switchMap(id => this.FormsService.loadByID(id))
    ).subscribe(form => this.updateForm(form)
      );

    this.route.params.pipe(
        map((params: any) => params['id']),
        switchMap(id => this.FormsService.loadByID(id))
        ).subscribe(      
          form => this.getGpss(form)
          );


    this.form2 = this.fb.group({
            id: null,
            form: null,
            campo_a: [null,            
              [Validators.required,
              Validators.minLength(2),
              Validators.maxLength(250),]
            ],
            campo_b: [null,            
             [Validators.required,
              Validators.minLength(2),
              Validators.maxLength(250),]
            ],
            campo_c: [null,            
              [Validators.required,
              Validators.minLength(2),
              Validators.maxLength(250),]
            ],
            campo_d: [null,            
              [Validators.required,
              Validators.minLength(2),
              Validators.maxLength(250),]
            ],
            campo_e: [null,[            
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(250),]
            ]
    });

    this.form = this.fb.group({
      id: null,
      titulo: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(250),
        ],
      ],
      tipo: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(250),
        ],
      ],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(250),
        ],
      ],
      opA1: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      opA2: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      opA3: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      tipo2: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(250),
        ],
      ],
      nome2: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(250),
        ],
      ],
      opB1: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      opB2: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      opB3: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      tipo3: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(250),
        ],
      ],
      nome3: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(250),
        ],
      ],
      opC1: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      opC2: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      opC3: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      tipo4: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(250),
        ],
      ],
      nome4: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ],
      ],
      opD1: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      opD2: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      opD3: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      tipo5: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(250),
        ],
      ],
      nome5: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(250),
        ],
      ],
      opE1: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      opE2: [
        null,
        [
          Validators.maxLength(250),
        ],
      ],
      opE3: [
        null,
        [
          Validators.maxLength(250),
        ],
      ]
    });
  }


  updateForm(form: any) {
  this.form.patchValue({
  id: form.id,
  titulo: form.titulo,
  tipo: form.tipo,
  nome: form.nome,
  opA1: form.opA1,opA2: form.opA2,opA3: form.opA3,
  tipo2: form.tipo2,
  nome2: form.nome2,
  opB1: form.opB1,opB2: form.opB2,opB3: form.opB3,
  tipo3: form.tipo3,
  nome3: form.nome3,
  opC1: form.opC1,opC2: form.opC2,opC3: form.opC3,
  tipo4: form.tipo4,
  nome4: form.nome4,
  opD1: form.opD1,opD2: form.opD2,opD3: form.opD3,
  tipo5: form.tipo5,
  nome5: form.nome5,
  opE1: form.opE1,opE2: form.opE2,opE3: form.opE3
  })
  //,  console.log(this.form.value);
    
  }

  getGpss(form: any){
   // console.log(this.form.value);
    this.gpss = [this.form.value];
   }
 


  hasError(field: string): boolean {
    return true;
  }

  onSubmit(): void {
    this.submitted = true;
    //console.log(this.form.value);
    if (this.form.valid) {
      
      if (this.form.value.id) {
        this.FormsService.update(this.form.value).subscribe(
        (success) => {
          alert('Formulário Salvo com sucesso!');
          this.location.back();
        },
        (error) => {
          alert('Houve um erro, tente novamente!');
        });}

      else{
        this.FormsService.create(this.form.value).subscribe(
        (success) => {
          alert('Formulário criado com sucesso!');
          this.location.back();
        },
        (error) => {
          alert('Houve um erro, tente novamente!');
        });}

    }
  }


  onSubmit2(): void {
   this.submitted = true;
    console.log(this.form2.value);
   // if (this.form2.valid) {
      
        this.FormsService.save(this.form2.value).subscribe(
        (success) => {
          alert('Cadastro realizado com sucesso!');
          this.location.back();
        },
        (error) => {
          alert('Houve um erro, tente novamente!');
        });
  //  }
  //  else{alert('Todos campos são obrigatórios!')}
  }


  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }

    
  hasShow(field: string) {   
    if(this.form.value[field] == 'combo'){
    return true;
    }
    else{
    return false;
    }
  }

  

}



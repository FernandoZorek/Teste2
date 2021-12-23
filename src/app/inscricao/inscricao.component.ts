import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { GpsService } from '../gps.service';


@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {

gpss : any[] | undefined;
pagina!: number;
inscricao!: Subscription;

constructor(
  private GpsService: GpsService,
  private route: ActivatedRoute,
  private router: Router
) { }

ngOnInit() {
  this.gpss = this.GpsService.getGpss();

  this.inscricao = this.route.queryParams.subscribe(
    (queryParams: any) => {
      this.pagina = queryParams['pagina'];
    }
  );
}

ngOnDestroy(){
  this.inscricao.unsubscribe();
}

proximaPagina(){
  if(isNaN(+this.pagina)){this.pagina = 1}
  this.router.navigate(['/inscricao'], 
    {queryParams: {'pagina': ++this.pagina}});
}

}



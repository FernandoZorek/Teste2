
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { GpsService } from './../../gps.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {

  id!: number;
  inscricao!: Subscription;
  gps: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gpsService: GpsService
  ) { 
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route);
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.gps = this.gpsService.getGps(this.id);

        if (this.gps == null){
            this.router.navigate(['/p404']);
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GpsService {
  
  getGpss(){
    return [
      {id: 1, nome: 'Formulário 1'},
      {id: 2, nome: 'Formulário 2'}
    ];
  }

  getGps(id: number){
    let gpss = this.getGpss();
    for (let i=0; i<gpss.length; i++){
      let gps = gpss[i];
      if (gps.id == id){
        return gps;
      }
    }
    return null;
  }

  constructor() { }
}

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay, take } from 'rxjs/operators';
import { Form } from './form';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  
  private readonly API = `${environment.API}forms`;
  private readonly API2 = `${environment.API}users`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Form[]>(this.API)
    .pipe(
      delay(500),
      tap(console.log)
    );
  }

  
  list2() {
    return this.http.get<Form[]>(this.API2)
    .pipe(
      delay(500),
      tap(console.log)
    );
  }
  
  loadByID(id: any) {
    return this.http.get<Form>(`${this.API}/${id}`).pipe(take(1));
  }

  create(form: any) {
    return this.http.post(this.API, form).pipe(take(1));
  }
  
 save(form2: any) {
  return this.http.post(this.API2, form2).pipe(take(1));
}

update(form: any) {
  return this.http.put(`${this.API}/${form.id}`, form).pipe(take(1));
}


delete(id: any) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
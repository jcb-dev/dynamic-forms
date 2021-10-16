import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fields, Forms } from '../models/forms';
import { FormType } from '../enums/forms.enum';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) {
  }

  public getFormByFormName(formName: FormType): Observable<Fields[]> {
    return this.http.get<Forms>(environment.baseUrl + `forms`)
      .pipe(map((form: Forms) => {
        return form.Registration
      }));
  }
}

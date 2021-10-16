import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormsService } from 'src/app/core/services/forms.service';
import { takeUntil } from 'rxjs/operators';
import { Fields } from 'src/app/core/models/forms';
import { FormType } from 'src/app/core/enums/forms.enum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  constructor(private formsService: FormsService) { }

  private sub$ = new Subject();
  public header: FormType = FormType.Registration;
  public fields: Fields[];

  ngOnInit(): void {
    this.formsService.getFormByFormName(FormType.Registration)
      .pipe(takeUntil(this.sub$))
      .subscribe((fields: Fields[]) => {
        this.fields = fields;
      });
  }

  ngOnDestroy(): void {
    this.sub$.next();
    this.sub$.complete();
  }
}

import { OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";


export class MyValidators implements OnInit {

  reportsForm: FormGroup = this.fb.group( {
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    chartDate: ['', Validators.required],
  });

  constructor (
    private fb: FormBuilder
  ) {}

  ngOnInit():void {
  }



    static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
        return new Promise (resolve => {
          setTimeout( () => {
            if (control.value === 'test@test.test') {
              resolve({uniqEmail: true})
            } else {
              resolve(null)
            }
          }, 2000);
        })
      }
}



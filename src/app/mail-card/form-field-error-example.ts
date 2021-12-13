import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder ,FormControl, FormGroup, Validators} from '@angular/forms';
// import { MyValidators } from './my-validators';

@Component({
  selector: 'form-field-error-example',
  templateUrl: 'form-field-error-example.html',
  styleUrls: ['form-field-error-example.css'],
})
export class FormFieldErrorExample implements OnInit {

  reportsForm: FormGroup = this.fb.group( {
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    chartDate: ['', Validators.required],
  });

  @Output() value = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit():void {
    this.getErrorMessage();
  }


  email = new FormControl('', [Validators.required, Validators.minLength(5), Validators.email],/* MyValidators.uniqEmail*/  ) ;
                                                                                                /* мой валидатор с условием того , 
                                                                                                 что test@test.test не должно 
                                                                                                 пропускать , не работает , третьим 
                                                                                                 параметром в formControl не проходит */
  
  getErrorMessage() {
    this.email.valueChanges.subscribe((value) => {
      console.log(value);
      this.value.emit(value);
    })
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  };

}


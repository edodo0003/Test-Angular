import { Component , OnInit} from '@angular/core';
import {   FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'questionnaire form';
  nameControl: FormControl = new FormControl;
  email: string = '';
  hobbiesArray: FormControl = new FormControl;



  ngOnInit () {
    this.nameControl = new FormControl('', [Validators.required, Validators.minLength(3)],);
    this.nameControl.valueChanges.subscribe((value) => console.log(value));
    this.nameControl.statusChanges.subscribe((status) => {
      console.log(this.nameControl.errors);
      console.log(status);
    });


  }

  setEmail(e: string) {
    this.email = e;
  }


}



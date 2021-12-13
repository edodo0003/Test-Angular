import { Component } from '@angular/core';
import { FormArray, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent  {

  hobbiesArray = new FormArray([new FormControl('', Validators.required)]);

  addInputControl() {
    this.hobbiesArray.push(new FormControl('', Validators.required))
  }
  
  removeInputControl(idx: number) {
    this.hobbiesArray.removeAt(idx);
  }
  }

 



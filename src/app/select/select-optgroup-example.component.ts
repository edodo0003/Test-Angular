import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';


interface Version {
  value: string;
  viewValue: string;
}

interface VersionGroup {
  disabled?: boolean;
  name: string;
  version: Version[];
}

@Component({
  selector: 'app-select-optgroup-example',
  templateUrl: 'select-optgroup-example.component.html',
  styleUrls: ['select-optgroup-example.component.scss']
})
export class SelectOptgroupExample {
  versionControl = new FormControl(); 
  versionGroups: VersionGroup[] = [
    {
      name: 'Angular',
      version: [
        {value: 'Angular', viewValue: '1.1.1'},
        {value: 'Angular', viewValue: '1.2.1'},
        {value: 'Angular', viewValue: '1.3.3'},
      ],
    },
    {
      name: 'React',
      version: [
        {value: 'React', viewValue: '2.1.2'},
        {value: 'React', viewValue: '3.2.4'},
        {value: 'React', viewValue: '4.3.1'},
      ],
    },
    {
      name: 'Vue',
      // disabled: true,
      version: [
        {value: 'Vue', viewValue: '3.3.1'},
        {value: 'Vue', viewValue: '5.2.1'},
        {value: 'Vue', viewValue: '5.1.3'},
      ],
    },
  ];
}
/* Я пошел более легким путем и использовал форму в angular для выбора версии фрейморка , чтобы не 
пришлось лочить выбор версии , если сам фрейморк не был выбран. Узнал про метод dirty 
который насколько я понял, может мне помочь в данном вопросе. Но из за базовых знаний 
применить не смог   */
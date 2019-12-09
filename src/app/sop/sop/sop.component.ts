import { Component, OnInit } from '@angular/core';
import { SOP } from 'src/app/models';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sop',
  templateUrl: './sop.component.html',
  styleUrls: ['./sop.component.css']
})
export class SopComponent implements OnInit {
  sopForm;
  sops: SOP[] = [
    {
      id: 0,
      title: 'Quality Manual',
      rev: '12',
      num: '1000',
  },
  {
    id: 1,
    title: 'Design Controls',
    rev: '1',
    num: '1001',
  },
  {
    id: 2,
    title: 'Purchasing Controls',
    rev: '3',
    num: '1002',
  },
  ]
  constructor() {
    this.sopForm = new FormGroup({
      num: new FormControl(),
      title: new FormControl(),
      rev: new FormControl()
    });
   }

  ngOnInit()  {

  }

  onSubmit() {
    this.sopForm.reset()
  }
  

}

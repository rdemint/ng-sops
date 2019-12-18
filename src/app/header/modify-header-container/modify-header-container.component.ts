import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SecureServerOptions } from 'http2';

@Component({
  selector: 'app-modify-header-container',
  templateUrl: './modify-header-container.component.html',
  styleUrls: ['./modify-header-container.component.css']
})
export class ModifyHeaderContainerComponent implements OnInit {
headerForm: FormGroup;

  constructor() {
    this.headerForm = new FormGroup({
      rev: new FormControl(),
      releaseDate: new FormControl(),
    });
   }

  ngOnInit() {
  }

  onSubmit(form) {
    this.modifyHeader(form)
    this.headerForm.reset()
  }

  async modifyHeader(form) {
    Word.run(async context => {
      var sections = context.document.sections.items[1].getHeader().insertText
      for (let i = 0; i < sections; i++) {
        context.document.sections[i].header.
      }
      // context.load(sel_range, 'text');
      // await context.sync(sel_range);


      // const arr = sel_range.text;
      // let sop_num = arr.split(' ');
      // let num = arr.split(' ')[0].trim();
      // let title_rev = arr.split('Rev')[0].trim();
      // let rev = arr.split('Rev')[1].trim();
      // let title = title_rev.split(num)[1].trim();
      // let sop = {
      //   id: 5,
      //   num: num,
      //   title: title,
      //   rev: rev
      // }
      // this.sops.push(sop);
    })
  }

}

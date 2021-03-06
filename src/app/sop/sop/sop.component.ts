import { ViewChild, Component, OnInit } from '@angular/core';
import { SOP } from 'src/app/models';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sop',
  templateUrl: './sop.component.html',
  styleUrls: ['./sop.component.css']
})
export class SopComponent implements OnInit {
  fileReader = new FileReader();
  sopForm;
  sopFileForm;
  records: any[] = [];
  test1: any = true;
  test2: any = false;
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
  ];

@ViewChild('csvReader', {static:true}) csvReader: any;

  constructor() {
    this.sopForm = new FormGroup({
      num: new FormControl(),
      title: new FormControl(),
      rev: new FormControl()
    });

    this.sopFileForm = new FormGroup({
      file: new FormControl(),
    })
   }

  ngOnInit()  {
  }

  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader()
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        this.getDataRecordsArrayFromCSVFile(csvRecordsArray);
      };

      reader.onerror = function() {
        console.log('error occured while reading file');
      };
    } else {
        alert("Please import valid .csv file.");
      }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any) {
    let headers = (<string>csvRecordsArray[0]).split(',');
    let headerLength = headers.length;

    for (let i=1; i< csvRecordsArray.length; i++) {
      let currentRecord = (<string>csvRecordsArray[i].split(','));
      if (currentRecord.length == headerLength) {
        let csvRecord = {
          id: 4,
          num: currentRecord[0].trim(),
          title: currentRecord[1].trim(),
          rev: currentRecord[2].trim()
        }
        this.sops.push(csvRecord);
      }
    }
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  async insertSOP(id:number) {
    return Word.run(async context => {
      let sop = this.sops[id];
      context.document.body.insertParagraph(sop.num + " " + sop.title + " " + "Rev " + sop.rev, "Start");
      await context.sync();
    })
    .catch(function(error) {
      console.log("Error: " + error);
    //   if (error instanceof OfficeExtension.Error) {
    //     console.log("Debug info: " + JSON.stringify(error.debugInfo));
    // }
    });
  }

  onSubmit(value) {
    this.sops.push({
      id: 4,
      num: value.num,
      title: value.title,
      rev: value.rev
    });
    this.sopForm.reset()
  }

  async addSOP(text) {
    Word.run(async context => {
      this.sops.push({id: 7, num: "3000", title: "Training", rev: "8"});
      var sel_range = context.document.getSelection();
      context.load(sel_range, 'text');
      await context.sync(sel_range);
      const arr = sel_range.text;
      let sop_num = arr.split(' ');
      let num = arr.split(' ')[0].trim();
      let title_rev = arr.split('Rev')[0].trim();
      let rev = arr.split('Rev')[1].trim();
      let title = title_rev.split(num)[1].trim();
      let sop = {
        id: 5,
        num: num,
        title: title,
        rev: rev
      }
      this.sops.push(sop);
    })
  }


}

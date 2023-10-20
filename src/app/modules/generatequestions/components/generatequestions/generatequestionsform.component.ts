import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TableItem } from 'src/app/class/tablecongifuration';
 import * as xls from 'xlsx'
@Component({
  selector: 'app-generatequestionsform',
  templateUrl: './generatequestionsform.component.html',
  styleUrls: ['./generatequestionsform.component.css']
})
export class GeneratequestionsFormComponent implements OnInit {

  title = 'angular-classes';

  configurations:TableItem[] = [];
  form: FormGroup;
  types: boolean[] = [true, false];
  typesquestions: string[] = ["Encabezado", "Pregunta"];
  typevisible: string[] = ["Si", "No"];


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([]),
    });
  }

  ngOnInit(): void {

  }

  readExcelFile(e: any) {
    const file = e.target.files[0];
    let fr = new FileReader();

    fr.readAsArrayBuffer(file);

    fr.onload = () => {
      let data = fr.result;
      let workbook = xls.read(data, { type: 'array' });

      const sheetname = workbook.SheetNames[0];
      const sheet1 = workbook.Sheets[sheetname];

      this.configurations = xls.utils.sheet_to_json(sheet1, { raw: true });
      console.log(this.configurations);

      // Luego de procesar el archivo Excel, inicializa el FormArray y añade los elementos
      this.initializeFormArray();
    }
  }


    initializeFormArray() {
      this.items.clear();
      this.configurations.forEach((item) => {

        this.addNewItem(item)
      });
      console.log('FormArray initialized:', this.form);
      console.log('Items:', this.items);
    }

    addNewItem(item: TableItem) {
      let formGroup = this.addItem(item);
      this.items.push(formGroup);
    }


  get items() {
    return this.form.get('items') as FormArray;
  }

  addItem(item: TableItem) {
    return this.fb.group({
      name: [item.name ? item.name : ''],
      tipo: [item.tipo ? item.tipo : ''],
      obligatoria: [item.obligatoria ? item.obligatoria : ''],
      habilitada: [item.habilitada ? item.habilitada : ''],
      orden: [item.orden ? item.orden : ''],
      questionId: [item.questionId  ? item.questionId : ''],
      repeaterId: [item.repeaterId ? item.repeaterId : ''],
      shared: [item.shared ? item.shared : ''],
      supplier: [item.supplier ? item.supplier : ''],
      buyer: [item.buyer ? item.buyer : ''],
      internal: [item.internal ? item.internal : ''],
      auditor: [item.auditor ? item.auditor : ''],
    });

  }

  deleteItem(i: number) {
    this.items.removeAt(i);
  }

  track(item: any, index: number) {
    return index;
  }

}

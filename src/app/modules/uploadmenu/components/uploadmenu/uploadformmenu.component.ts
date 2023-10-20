import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { menu } from 'src/app/interfaces/menu.interfaces';
 import * as xls from 'xlsx'


@Component({
  selector: 'app-uploadformmenu',
  templateUrl: './uploadformmenu.component.html',
  styleUrls: ['./uploadformmenu.component.css']
})
export class UploadFormmenuComponent implements OnInit {

  title = 'angular-classes';

  configurations:menu[] = [];
  form: FormGroup;
  types: boolean[] = [true, false];
  typesquestions: string[] = ["Encabezado", "Pregunta"];
  typevisible: string[] = ["Si", "No"];
  script: string = "";
  projectid: string = "";
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
    console.log(fr);
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

    addNewItem(item: menu) {
      let formGroup = this.addItem(item);
      this.items.push(formGroup);
    }


  get items() {
    return this.form.get('items') as FormArray;
  }

  addItem(item: menu) {
    return this.fb.group({

      identificador: [item.identificador ? item.identificador : ''],
      posicion: [item.posicion ? item.posicion : ''],
      espanol: [item.espanol ? item.espanol : ''],
      ingles: [item.ingles ? item.ingles : ''],
      portugues: [item.portugues ? item.portugues : ''],
      brasileno: [item.brasileno ? item.brasileno : ''],
      frances: [item.frances ? item.frances : ''],
      italiano: [item.italiano ? item.italiano : ''],
      aleman: [item.aleman ? item.aleman : ''],

    });

  }

  deleteItem(i: number) {
    this.items.removeAt(i);
  }

  execute(i: number) {
    this.script = "Select MenuId from cfg.Menu where Description = ' "+this.form.value.items[i].identificador+"' and projectVersionId = "+this.projectid;
    console.log(this.form.value.items[i]);
  }

  track(item: any, index: number) {
    return index;
  }

}

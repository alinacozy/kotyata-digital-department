import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Kitten } from 'src/app/core/data-classes/kitten';

interface KittenForm {
  name: FormControl<string>,
  gender: FormControl<string>,
  birthday: FormControl<Date>,
  type: FormControl<string>
}

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {

  kittens: Kitten[] = [
    new Kitten("Бусинка", "Девочка", new Date(2024, 2, 5), "Британская"),
    new Kitten("Тёма", "Мальчик", new Date(2023, 7, 12), "Американский керл"),
    new Kitten("Диона", "Девочка", new Date(2024, 0, 18), "Японский бобтейл"),
    new Kitten("Васёк", "Мальчик", new Date(2024, 0, 10), "Мейн-кун"),
    new Kitten("Алина", "Девочка", new Date(2023, 6, 23), "Сибирская"),
  ]

  myForm: FormGroup = new FormGroup<KittenForm>({
    name: new FormControl('', { validators: [Validators.required], nonNullable: true, }),
    gender: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    birthday: new FormControl(new Date(), { nonNullable: true }),
    type: new FormControl('', { nonNullable: true })
  })

  constructor() {
  }

  onSubmit() {
    let values=this.myForm.getRawValue();
    if(values.type==''){
      if (values.gender=='Мальчик'){
        values.type="Беспородный"
      }
      if (values.gender=='Девочка'){
        values.type="Беспородная"
      }
    }
    let today=new Date();
    let age=Math.ceil((today.getTime()-new Date(values.birthday).getTime())/(1000 * 3600 * 24));
    this.kittens.push(new Kitten(
      values.name, 
      values.gender,
      values.birthday,
      values.type));
  }

}

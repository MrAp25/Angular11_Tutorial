import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UserdataService } from './userdata.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {FormControl, FormGroup, Validators} from '@angular/forms'

export interface Fruit {
  name: string;
}

//Model Data
interface dataType {
  strn: string,
  numb: number,
  bool: boolean,
  deat: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  subtitle = 'Interpolation Test'; //Interpolation by variable

  //Interpolation by function
  getFun() {
    return "Interpolation Function Test";
    return this.subtitle //function value from variable
  }

  //Interpolation by object
  obj = {
    str: 'Interpolation object Test',
    num: 10
  }

  //Interpolation by array
  arr = ['Array Interpolation0', 'Array Interpolation1', 'Array Interpolation2']

  //Simple Arithmetic Interpolation
  a = 50;
  b = 100;

  //URL Interpolation
  siteUrl = window.location.href

  //Call data from Function
  data() {
    alert('Alert messege from function...')
  }

  //Event
  myEvent(evt: any) {
    console.warn(evt)
  }

  //Bind property value
  bind = "Binding Property Value";

  //Enable Disable
  disabledBox = true;
  enableBox() {
    this.disabledBox = false
  }

  //If Else
  show = 'yes';
  clr = 'blue';

  //Switch Case
  color = 'green';

  //For Loop
  loop = [
    {
      name: 'Ankit',
      age: 27,
      email: 'abc@gmail.com'
    },
    {
      name: 'Jaydip',
      age: 26,
      email: 'pqr@gmail.com'
    },
    {
      name: 'Dharmesh',
      age: 34,
      email: 'xyz@gmail.com'
    }
  ];

  //Simple from
  getValue(value: any) {
    console.warn(value)
  }

  //Material Chips
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  //Material Chips End

  //Style Binding
  colr = "orange";
  con = false;
  err: true | undefined;
  updateColor() {
    this.colr = "blue"
  }

  //data from parent component to child
  msg = "Data From Parent to child";

  //data from child component to parent
  mesg = "";
  mnum!: number;
  parent(ctop: any) {
    this.mesg = ctop.mesg,
      this.mnum = ctop.mnum
  }

  //pipes
  pps = 'This is Pipe';
  today = Date.now();
  crncy = 100;

  //Data from Service
  name = ''; //string variable declaration
  age: number; //number datatype declaration
  contact: any; //any datatype declaration
  indian: boolean; //boolean datatype declaration
  apiData: any = [];
  //Data & API from Service
  constructor(private userService: UserdataService, private viewContainer: ViewContainerRef, private cfr:ComponentFactoryResolver) {
    //Data from service
    let data = this.userService.getData(); //getData from service
    this.name = data.name, //bind service data to datatype
      this.age = data.age,  //bind service data to datatype
      this.contact = data.contact,  //bind service data to datatype
      this.indian = data.indian,  //bind service data to datatype

      /*Lazy Component
      async loadAdmin()
      {
        this.viewContainer.clear();
        const {AdminComponent} = await import('./admin/admin.component');
        this.viewContainer.createComponent(this.cfr.resolveComponentFactory(AdminComponent))
      }
      async loadContact()
      {
        this.viewContainer.clear();
        const {ContactComponent} =  await import('./contact/contact.component');
        this.viewContainer.createComponent(this.cfr.resolveComponentFactory(ContactComponent))
      }*/
      
      //API data from Service
      this.userService.getApiData().subscribe(apiData => {
        console.log(apiData);
        this.apiData=apiData;
      })
  }
  
  //Model Data
  getModelData() {
    const mdata: dataType = {
      strn: "Model Data",
      numb: 50,
      bool: true,
      deat: "100, Model Data, India - 100000"
    }
    return mdata;
  }

  //ngForm
  onSubmit(data: any)
  {
    console.warn(data);
  }

  //reactive form
  loginForm= new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  //For Prefilled form
  testForm= new FormGroup({
    name: new FormControl('',Validators.required),
    mobile: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    temail: new FormControl('',Validators.required),
    tpassword: new FormControl('',Validators.required)
  })
  formData={
    name: "Ankit Panchal",
    mobile: "8866807490",
    address: "11, Shakti Society, Anand - 388001",
    temail: "abc@xyz.com",
    tpassword: "abp123"
  }
}




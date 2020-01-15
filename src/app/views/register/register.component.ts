import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { DatePipe } from '@angular/common';

@Component( {
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RegisterComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group( {
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group( {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
      birthDate: ['', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group( {
      dataFor3rd: ['', Validators.required]
    });
  }

  clicked() {
    console.log((this.secondFormGroup.get('birthDate').value));
  }
}

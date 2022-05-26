import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-electricity-form',
  templateUrl: './electricity-form.component.html',
  styleUrls: ['./electricity-form.component.css']
})
export class ElectricityFormComponent implements OnInit {
  electricityForm!: FormGroup;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.initializeElectricityForm();
  }
  initializeElectricityForm(): any {
    this.electricityForm = new FormGroup({
      userName: new FormControl('NetWeb', Validators.required),
      units: new FormControl('', Validators.required),
      pricePerUnit: new FormControl('', Validators.required)
    })
  }
  onSubmit(): any {
    if (this.electricityForm.valid)
      this.submitForm.emit(this.electricityForm.value);
  }
  calUnits(): any {
    let unit = this.electricityForm.value.units
    if (unit.toString().length >= 3) {
      if (unit >= 0 && unit <= 100) {
        this.electricityForm.controls['pricePerUnit'].patchValue(2.25);
      }
      else if (unit >= 100 && unit <= 150) {
        this.electricityForm.controls['pricePerUnit'].patchValue(2.75);
      }
      else if (unit >= 150 && unit <= 200) {
        this.electricityForm.controls['pricePerUnit'].patchValue(3.61);
      }
      else if (unit >= 200 && unit <= 250) {
        this.electricityForm.controls['pricePerUnit'].patchValue(6.67);
      }
      else if (unit >= 500 && unit <= 1000) {
        this.electricityForm.controls['pricePerUnit'].patchValue(7.71);
      }
    }
    // else {
    //   this.electricityForm.controls['pricePerUnit'].patchValue(null);
    // }
  }
}

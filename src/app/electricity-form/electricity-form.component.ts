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
  notifierShow: boolean = false;
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
      setTimeout(() => {
        this.electricityForm.controls["units"].patchValue(null);
        this.electricityForm.controls["pricePerUnit"].patchValue(null);
      }, 500);
  }
  calUnits(): any {
    let unit = this.electricityForm.value.units
      if (unit >= 0 && unit <= 100) {
        this.electricityForm.controls['pricePerUnit'].patchValue(2.25);
      }
      else if (unit >= 100 && unit <= 150) {
        this.electricityForm.controls['pricePerUnit'].patchValue(2.75);
      }
      else if (unit >= 150 && unit <= 200) {
        this.electricityForm.controls['pricePerUnit'].patchValue(3.61);
      }
      else if (unit >= 200 && unit <= 500) {
        this.electricityForm.controls['pricePerUnit'].patchValue(6.67);
      }
      else if (unit >= 500 && unit <= 1000) {
        this.electricityForm.controls['pricePerUnit'].patchValue(7.71);
      }
  }
  checkingUnits(): any {
    let unit = this.electricityForm.value.units;
    let pricePerUnit = this.electricityForm.value.pricePerUnit;
      if (unit >= 0 && unit <= 100) {
        if(pricePerUnit == "2.25" && pricePerUnit.toString().replace(".","").length == 3) {
          this.electricityForm.controls['pricePerUnit'].patchValue(2.25);
          this.notifierShow = false;
        }
        else {
          this.notifierShow = true;
        }
      }
      else if (unit >= 100 && unit <= 150) {
        if(pricePerUnit == "2.75" && pricePerUnit.toString().replace(".","").length == 3) {
          this.electricityForm.controls['pricePerUnit'].patchValue(2.75);
          this.notifierShow = false;
        }
        else {
          this.notifierShow = true;
        }
      }
      else if (unit >= 150 && unit <= 200) {
        if(pricePerUnit == "3.61" && pricePerUnit.toString().replace(".","").length == 3) {
          this.electricityForm.controls['pricePerUnit'].patchValue(3.61);
          this.notifierShow = false;
        }
        else {
          this.notifierShow = true;
        }
      }
      else if (unit >= 200 && unit <= 500) {
        if(pricePerUnit == "6.67" && pricePerUnit.toString().replace(".","").length == 3) {
          this.electricityForm.controls['pricePerUnit'].patchValue(6.67);
          this.notifierShow = false;
        }
        else {
          this.notifierShow = true;
        }
      }
      else if (unit >= 500 && unit <= 1000) {
        if(pricePerUnit == "7.71" && pricePerUnit.toString().replace(".","").length == 3) {
          this.electricityForm.controls['pricePerUnit'].patchValue(7.71);
          this.notifierShow = false;
        }
        else {
          this.notifierShow = true;
        }
        this.electricityForm.controls['pricePerUnit'].patchValue(7.71);
      }

  }
}

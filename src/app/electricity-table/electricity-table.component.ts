import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-electricity-table',
  templateUrl: './electricity-table.component.html',
  styleUrls: ['./electricity-table.component.css']
})
export class ElectricityTableComponent implements OnInit {
  @Input() formDataPush: any;
  electricityTableColumns: any[] = [];
  electricityBillData: any[] = [];
  total!: number;
  constructor() { }

  ngOnInit(): void {
    this.bindColumns();
  }
  bindColumns(): any {
    this.electricityTableColumns = [
      {label: "CUSTOMER NAME", name: "userName"},
      {label: "ELECTRICITY UNITS", name: "units"},
      {label: "PRICE PER UNIT", name: "pricePerUnit"},
      {label: "TOTAL", name: "total"}
    ]
  }
  getTotal(data: any) {
    let total = data.units * data.pricePerUnit;
    return total;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NetWeb-Task';
  formDataPush: any[] = [];

  constructor() {}
  ngOnInit(): void {
  }

  formSubmit(formData: any) {
    this.formDataPush.push(formData);
  }
}

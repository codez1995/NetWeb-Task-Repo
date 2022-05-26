import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectricityFormComponent } from './electricity-form/electricity-form.component';
import { ElectricityTableComponent } from './electricity-table/electricity-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectricityFormComponent,
    ElectricityTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

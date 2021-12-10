import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddColumnComponent } from './add-column.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AddColumnComponent
  ],
  exports: [
    AddColumnComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddColumnModule { }

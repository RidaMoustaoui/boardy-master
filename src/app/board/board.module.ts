import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from '../board/board.component';
import { ColumnModule } from './column/column.module';
import { AddColumnModule } from './add-column/add-column.module';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoardComponent
  ],
  exports: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    ColumnModule,
    AddColumnModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BoardModule { }

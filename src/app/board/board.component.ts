import { Component, OnInit } from '@angular/core';
import { BOARD } from "./@shared/mock/board.mock";
import { COLUMNS } from "./@shared/mock/column.mock";
import { EventEmitter, Output } from '@angular/core';

import { Board } from './@shared/models/board';
import { Column } from './@shared/models/column';
import { BoardService } from "./@shared/services/board.service";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  board: Board = BOARD;
  columns: Column[] = [];
  column!: Column;

  ngOnInit(): void {
    this.getColumns()
  }

  addColumn(column: Column) {
    console.log("addColumn > ", column);
    this.columns.push(column);
  }

  
  deleteColumn(columnId: number) {
    this.columns = this.columns.filter(c => c._id != columnId);
  }

  uptadeColumn(){
    this.boardService.edit(this.column._id).pipe(first()).subscribe({
      next:() => {
          console.log("test");
      }

    })
  }

  
  private getColumns() {
    this.boardService.getColumns().subscribe(
      (columns: Column[]) => { this.columns = columns },
      (error) => {
        console.error('Erreur crudcrud pas active')
      }

      );
  }

}
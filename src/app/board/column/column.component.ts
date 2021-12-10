import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { first } from 'rxjs';
import { Column, Board } from '../@shared/models';
import { BoardService } from '../@shared/services/board.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() column!: Column;
  @Output() onDeleted : EventEmitter<number> = new EventEmitter();

  constructor(private boardService : BoardService) { }

 delete(){
    this.boardService.delete(this.column._id).subscribe(() => {
      this.onDeleted.emit(this.column._id);
    })
  }
  
editColumn() {
  this.boardService.edit(this.column._id).subscribe()

  
  

  
 
}


  ngOnInit(): void {
  }




}

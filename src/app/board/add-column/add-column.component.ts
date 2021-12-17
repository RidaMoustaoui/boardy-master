import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { COLUMNS } from '../@shared/mock/column.mock';
import { Board, Column } from '../@shared/models';
import { BoardService } from '../@shared/services/board.service';



@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss']
})
export class AddColumnComponent implements OnInit {
  columnIdEdting?: number;
  @Input() column!: Column;
  @Output() onColumnAdded: EventEmitter<Column> = new EventEmitter<Column>();
  @Output() onEdit: EventEmitter<Column> = new EventEmitter<Column>();
  @Input("columnEditing") set setColumnEditing(column :Column | undefined ){
    console.log("column > ", column)
    this.columnIdEdting= column?._id;
    if(column != undefined) {
       this.form.patchValue({
         title: column.title,
         description: column.description,
       
       })
    }
  }
  

 
  
  name = 'Angular';
  public form!: FormGroup

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }



  submit(): void {
  // console.log(this.form.value);
    // const title: string = this.form.get("title")?.value;
    // const description: string = this.form.get("description")?.value;

    // this.onColumnAdded.emit({ title: title, description: description });


    //this.boardService.addColumn({ title: title, description: description }).subscribe((columnAdded: Column) => {
    // this.onColumnAdded.emit(columnAdded)

    //})
    const title: string = this.form.get("title")?.value;
    const description: string = this.form.get("description")?.value;

    if (!this.columnIdEdting) {
      console.log(this.form.value);
      this.boardService.addColumn({ title: title, description: description }).subscribe((columnAdded: Column) => {
        this.onColumnAdded.emit(columnAdded)
      })
    }
    else {
      console.log(this.columnIdEdting);
      this.boardService.edit(this.columnIdEdting, { title: title, description: description }).subscribe((columnIdEdting: Column) => {
        this.onEdit.emit(columnIdEdting)
        window.location.reload()
      })  
    }




    //this.boardService.edit(this.column).subscribe((columnEditing: Column) => {
    // this.onEdit.emit(this.column);

    // })








    // if (this.form.valid) {
    //   console.log('form value: ', this.form.value);
    // } else {
    //     console.log('ERROR, FAUT ECRIRE!  ');
    //  }
  }
}



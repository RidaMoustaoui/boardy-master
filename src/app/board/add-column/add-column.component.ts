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
  @Input() column!: Column;
  @Output() onColumnAdded: EventEmitter<Column> = new EventEmitter<Column>();
  

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
    console.log(this.form.value);
    const title: string = this.form.get("title")?.value;
    const description: string = this.form.get("description")?.value;

    // this.onColumnAdded.emit({ title: title, description: description });

    this.boardService.addColumn({ title: title, description: description }).subscribe((columnAdded: Column) => {
      this.onColumnAdded.emit(columnAdded)
    })

   

   
    
    
    
    
    // if (this.form.valid) {
    //   console.log('form value: ', this.form.value);
    // } else {
    //     console.log('ERROR, FAUT ECRIRE!  ');
    //  }
  }
}



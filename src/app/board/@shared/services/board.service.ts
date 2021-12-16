import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../models/board';
import { Column } from '../models/column';




const  lienColonne = "https://crudcrud.com/api/1fc51d06daba4978868cb2583bdc372a/columns";
const  liencard = "https://crudcrud.com/api/1fc51d06daba4978868cb2583bdc372a/cards";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }


getColumns(): Observable<any> {
  return this.http.get(lienColonne);
}

addColumn(column : Partial<Column>): Observable<Column>{
  return this.http.post<Column>(lienColonne, column);
}

delete(columnId: number) {
  return this.http.delete(`${lienColonne}/${columnId}`);
}

edit(column: Column): Observable<any>{
  const url = `${lienColonne}/${column}`;
  return this.http.put<Column>(url, column);
}

}

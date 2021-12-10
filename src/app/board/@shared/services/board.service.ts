import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../models/board';
import { Column } from '../models/column';




const  lienColonne = "https://crudcrud.com/api/25d7e89b36954647817b85ff40379de3/columns";
const  liencard = "https://crudcrud.com/api/25d7e89b36954647817b85ff40379de3/cards";

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

edit(columnId: number): Observable<any>{
  const url = `${lienColonne}/${columnId}`;
  return this.http.put<Column>(url, columnId);
}

}

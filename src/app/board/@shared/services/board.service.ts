import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../models/board';
import { Column } from '../models/column';




const  lienColonne = "https://crudcrud.com/api/4d2a850ae77048e9a2b8e99da57b058d/columns";
const  liencard = "https://crudcrud.com/api/4d2a850ae77048e9a2b8e99da57b058d/cards";

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

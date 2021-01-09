import { Contact } from './contact.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = "http://localhost:3001/Contacts"

  constructor(public snackBar: MatSnackBar, public http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ?['msg-error'] : ['msg-success']
    })
  }

  public create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, contact).pipe(
      map(obj => obj),
    catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e:any): Observable<any> {
    this.showMessage('Ocorreu um Erro', true)
    return EMPTY;
  }

  read(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl)
  }

  readById(id: number): Observable<Contact> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Contact>(url);
  }

  update(contact: Contact): Observable<Contact> {
    const url = `${this.baseUrl}/${contact.id}`
    return this.http.put<Contact>(url, contact);
  }

  delete(id: number): Observable<Contact> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Contact>(url);
  }
}


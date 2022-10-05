import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './lista-albumes/Album';
import { Observable } from 'rxjs';

const URL='https://62a891acec36bf40bda915ff.mockapi.io/api/albumes';
@Injectable({
  providedIn: 'root'
})
export class TraerMockService {

  constructor(private http:HttpClient) { }
  public traer():Observable<Album[]>{
    alert("llego");
    return this.http.get<Album[]>(URL);
  }
}

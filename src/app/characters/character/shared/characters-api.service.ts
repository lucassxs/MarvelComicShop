import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
/*Credenciais para funcionamento da API*/
export class CharactersApiService {
  PUBLIC_KEY = '';
  HASH = '';
  URL_API = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7f4ec7241717b534c22ac087ee9051a5&hash=55d34a8f339ab475585ba738c26a6d31';

  constructor(private http: HttpClient) { }

  getAllCharacters () : Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }
}

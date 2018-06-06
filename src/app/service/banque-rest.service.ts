import {Injectable} from '@angular/core';
import {BanqueService} from './banque.service';
import {Client} from '../model/client';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable()
export class BanqueRestService implements BanqueService {

  api: String = environment.api;

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.api}/clients`)
      .pipe(
        retry(3),
        // catchError(err => new Error('ddd'))
      );
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.api}/clients/${id}`)
      .pipe(
        retry(3),
        // catchError(err => new Error('ddd'))
      );
  }

  addClient(client: Client) {
    return this.http.post<Client[]>(`${this.api}/clients/post`, client);
  }

  supprimer(client: Client) {
    // return this.http.delete(`${this.api}/clients/post`, client);
  }
}

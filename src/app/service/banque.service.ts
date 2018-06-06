import {Client} from '../model/client';
import {Observable} from 'rxjs';

export interface BanqueService {
  getClients(): Observable<Client[]>;

  getClient(id: number): Observable<Client>;

  addClient(client: Client);

}

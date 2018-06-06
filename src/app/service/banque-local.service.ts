import {Injectable} from '@angular/core';
import {BanqueService} from './banque.service';
import {Client} from '../model/client';
import {HttpClientModule} from '@angular/common/http';

@Injectable()
export class BanqueLocalService {

  clients: Client[] = [];

  constructor() {
    this.load();
  }

  private load(): void {
    const data = window.localStorage.getItem('data');
    this.clients = JSON.parse(data).clients
      .sort((cli1, cli2) => cli1.nom < cli2.nom ? -1 : 1);
  }

  private save(): void {
    localStorage.setItem('data', '{"clients": ' + JSON.stringify(this.clients) + '}');
  }

  getClients(): Client[] {
    return this.clients;
  }

  getClient(id: number): Client {
    return this.clients.find(client => client.id === id);
  }

  addClient(client: Client) {
    client.id = this.clients.reduce((max, cl) => cl.id > max ? cl.id : max, this.clients[0].id) + 1;
    this.clients.push(client);
    this.save();
  }
}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Client} from '../model/client';
import {Router} from '@angular/router';
import {BanqueRestService} from '../service/banque-rest.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit, AfterViewInit {
  clients: Client[];

  constructor(private router: Router,
              private banqueService: BanqueRestService) {
  }

  ngOnInit() {
    this.clients = [];
    this.banqueService.getClients().subscribe(data => this.clients = data);
  }

  ngAfterViewInit(): void {
    this.banqueService.getClients().subscribe(data => this.clients = data);
  }
}

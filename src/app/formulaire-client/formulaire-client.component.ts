import {Component, OnInit} from '@angular/core';
import {Client} from '../model/client';
import {Router} from '@angular/router';
import {ROUTE_CLIENTS} from '../app.routes';
import {BanqueRestService} from '../service/banque-rest.service';

@Component({
  selector: 'app-formulaire-client',
  templateUrl: './formulaire-client.component.html',
  styleUrls: ['./formulaire-client.component.css']
})
export class FormulaireClientComponent implements OnInit {

  nouveauClient: Client;

  constructor(private router: Router,
              private banqueService: BanqueRestService) {

  }

  ngOnInit() {
    this.nouveauClient = new Client();

  }

  enregistrer(): void {
    this.banqueService.addClient(this.nouveauClient)
      .subscribe(data => this.router.navigate([ROUTE_CLIENTS]));
    this.nouveauClient = new Client();
  }

}

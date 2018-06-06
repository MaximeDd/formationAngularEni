import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Client} from '../model/client';
import {BanqueRestService} from '../service/banque-rest.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  client: Client;
  displayedColumns = ['date', 'libelle', 'montant', 'type'];

  constructor(private banqueService: BanqueRestService,
              private routeActive: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.routeActive.snapshot.params['id'];
    this.banqueService.getClient(id).subscribe(data => {
      this.client = data;
    });
  }

  // supprimer() {
  //   this.banqueService.supprimer(this.client);
  // }
}

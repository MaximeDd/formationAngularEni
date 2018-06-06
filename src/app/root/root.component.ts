import {Component} from '@angular/core';
import {Auth} from '../model/auth';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  title = 'app';
  nom: string;
  estConnecte = false;
  nonAffiche = true;
  ajd = new Date();


  recupererIdentifiant(identifiant: Auth) {
    this.nom = identifiant.identifiant;
    this.estConnecte = true;
    this.nonAffiche = true;
  }

  onSignOut() {
    this.nom = '';
    this.estConnecte = false;
  }

  onSignIn() {
    this.nonAffiche = false;
  }
}

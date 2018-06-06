import {Routes} from '@angular/router';

import {ListeClientsComponent} from './liste-clients/liste-clients.component';
import {FormulaireClientComponent} from './formulaire-client/formulaire-client.component';
import {DetailClientComponent} from './detail-client/detail-client.component';

export const ROUTE_CLIENTS = 'clients';
export const ROUTE_ADD_CLIENT = 'clients/add';
export const ROUTE_DETAIL_CLIENT = 'clients/:id';

export const ROUTES: Routes = [{
  path: '', component: ListeClientsComponent, pathMatch: 'full'
}, {
  path: ROUTE_CLIENTS, component: ListeClientsComponent
}, {
  path: ROUTE_ADD_CLIENT, component: FormulaireClientComponent
}, {
  path: ROUTE_DETAIL_CLIENT, component: DetailClientComponent
}, {
  path: '**', redirectTo: '/'
}];

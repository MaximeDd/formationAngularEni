import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {RootComponent} from './root/root.component';
import {ListeClientsComponent} from './liste-clients/liste-clients.component';
import {CapitalizePipe} from './pipe/capitalize.pipe';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {FormulaireClientComponent} from './formulaire-client/formulaire-client.component';
import {DetailClientComponent} from './detail-client/detail-client.component';
import {BanqueLocalService} from './service/banque-local.service';
import {HttpClientModule} from '@angular/common/http';
import {BanqueRestService} from './service/banque-rest.service';
import {AuthComponent} from './auth/auth.component';

@NgModule({
  declarations: [
    RootComponent,
    ListeClientsComponent,
    CapitalizePipe,
    FormulaireClientComponent,
    DetailClientComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [
    BanqueLocalService,
    BanqueRestService
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}

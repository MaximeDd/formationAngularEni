import {NgModule} from "@angular/core";
import * as md from "@angular/material";

@NgModule({
  imports: [
    md.MatButtonModule,
    md.MatFormFieldModule,
    md.MatIconModule,
    md.MatInputModule,
    md.MatListModule,
    md.MatToolbarModule,
    md.MatCardModule,
    md.MatTableModule,
    md.MatIconModule
  ],
  exports: [
    md.MatButtonModule,
    md.MatFormFieldModule,
    md.MatIconModule,
    md.MatInputModule,
    md.MatListModule,
    md.MatToolbarModule,
    md.MatCardModule,
    md.MatTableModule,
    md.MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }

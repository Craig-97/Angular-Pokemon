import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonHeaderComponent } from 'src/components/pokemon-header/pokemon-header.component';
import { PokemonHomepageComponent } from 'src/components/pokemon-homepage/pokemon-homepage.component';
import { TypeFilterPipe } from 'src/pipes/typeFilter.pipe';
import { MaterialModule } from './../modules/material-module';
import { AbilitiesFilterPipe } from './../pipes/abilitiesFilter.pipe';
import { SearchPipe } from './../pipes/search.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from "@angular/material";
import { PokemonDetailDialogComponent } from 'src/components/pokemon-detail-dialog/pokemon-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHomepageComponent,
    PokemonHeaderComponent,
    SearchPipe,
    TypeFilterPipe,
    AbilitiesFilterPipe,
    PokemonDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PokemonDetailDialogComponent]
})
export class AppModule {}

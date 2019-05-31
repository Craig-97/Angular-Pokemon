import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonHeaderComponent } from 'src/components/pokemon-header/pokemon-header.component';
import { PokemonHomepageComponent } from 'src/components/pokemon-homepage/pokemon-homepage.component';
import { MaterialModule } from './../modules/material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHomepageComponent,
    PokemonHeaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

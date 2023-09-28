import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'

import { AllMatchesComponent } from './all-matches/all-matches.component';
import { SavedMatchesComponent } from './saved-matches/saved-matches.component'
import{SQLite} from '@ionic-native/sqlite'


@NgModule({
  declarations: [
    AppComponent,

    AllMatchesComponent,
    SavedMatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

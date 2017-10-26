import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

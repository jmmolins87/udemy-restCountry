import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ** My Modules **
import { SharedModule } from './shared/shared.module';
import { CountryModule } from './country/country.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ** My Modules **
    SharedModule,
    CountryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

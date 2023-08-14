import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AirportsComponent } from './airports/airports.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckAirportDirective } from './directive/check-airport.directive';
import { JsonAirportInfoPipe } from './pipe/json-airport-info.pipe';
import { DateMomentComponent } from './date-moment/date-moment.component';

@NgModule({
  declarations: [
    AppComponent,
    AirportsComponent,
    HomePageComponent,
    CheckAirportDirective,
    JsonAirportInfoPipe,
    DateMomentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

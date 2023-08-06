import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportsComponent } from './airports/airports.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'airports', component: AirportsComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

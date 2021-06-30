import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { HotelComponent } from "./components/hotel/hotel.component";

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hotel/:hotelId', component: HotelComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

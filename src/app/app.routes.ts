import { Routes } from '@angular/router';
import { HomeComponent } from './components/Pages/home/home.component';
import { PortfolioComponent } from './components/Pages/portfolio/portfolio.component';
import { AboutComponent } from './components/Pages/about/about.component';
import { ContactComponent } from './components/Pages/contact/contact.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent},
];

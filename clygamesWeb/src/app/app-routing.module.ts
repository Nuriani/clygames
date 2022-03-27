import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EmpeloComponent } from './pages/empelo/empelo.component';
import { HomeComponent } from './pages/home/home.component';
import { ArreUnicornioComponent } from './pages/juegos/arre-unicornio/arre-unicornio.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PrensaArreComponent } from './pages/prensa/prensa-arre/prensa-arre.component';
import { PrensaComponent } from './pages/prensa/prensa.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'juegos', component: JuegosComponent},
  {path: 'about', component: AboutComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'empleo', component: EmpeloComponent},
  {path: 'prensa', component: PrensaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'prensaArre', component: PrensaArreComponent},
  {path: 'juegoArre', component: ArreUnicornioComponent},

  { path: '**', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

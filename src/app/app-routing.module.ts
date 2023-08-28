import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProjetoDetalharComponent } from './pages/projetos/projeto-detalhar/projeto-detalhar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'projeto/:id', component: ProjetoDetalharComponent },
  { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

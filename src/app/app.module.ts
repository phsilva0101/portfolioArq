import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { IconeWhatsappComponent } from './components/icone-whatsapp/icone-whatsapp.component';
import { ProjetoDetalharComponent } from './pages/projetos/projeto-detalhar/projeto-detalhar.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    ProjetosComponent,
    ContatoComponent,
    CardComponent,
    IconeWhatsappComponent,
    ProjetoDetalharComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'; // componente que é a tela da home
import { CatalogComponent } from './views/catalog/catalog.component'; // componente que é a tela de catálogo
import { ContactComponent } from  './views/contact/contact.component'; // componente que é a tela de contato


const routes: Routes = [{
  path: '', // navegação entre as páginas por meio do Route
  component: HomeComponent
},{
  path: 'catalogo', // navegação entre as páginas por meio do Route
  component: CatalogComponent
}, {
  path: 'contato', // navegação entre as páginas por meio do Route
  component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

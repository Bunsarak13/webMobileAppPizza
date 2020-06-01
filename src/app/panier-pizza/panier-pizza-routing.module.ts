import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanierPizzaPage } from './panier-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: PanierPizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanierPizzaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanierPizzaPageRoutingModule } from './panier-pizza-routing.module';

import { PanierPizzaPage } from './panier-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanierPizzaPageRoutingModule
  ],
  declarations: [PanierPizzaPage]
})
export class PanierPizzaPageModule {}

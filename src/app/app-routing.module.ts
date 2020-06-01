import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pizza-list',
    loadChildren: () => import('./pizza-list/pizza-list.module').then( m => m.PizzaListPageModule)
  },
  {
    path: 'pizza-detail',
    loadChildren: () => import('./pizza-detail/pizza-detail.module').then( m => m.PizzaDetailPageModule)
  },
  {
    path: 'panier-pizza',
    loadChildren: () => import('./panier-pizza/panier-pizza.module').then( m => m.PanierPizzaPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'formulaire',
    loadChildren: () => import('./formulaire/formulaire.module').then( m => m.FormulairePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

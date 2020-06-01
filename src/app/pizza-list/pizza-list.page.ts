import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NavigationExtras, Router} from '@angular/router';
import {PanierPizzaService} from '../services/panier-pizza.service';


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.page.html',
  styleUrls: ['./pizza-list.page.scss'],
})
export class PizzaListPage implements OnInit {

  pizzaList = [];
  panier: number[];
  count: number;


  constructor(private http: HttpClient, private router: Router, private panierPizzaService: PanierPizzaService ) {

    this.panierPizzaService.panier
        .subscribe(value => {
          this.count = value.length;
          this.panier = value;
          console.log('Ajout dans le panier');
        });

    this.http.get('https://api.ynov.jcatania.io/pizza').subscribe((response: any[]) => {
      for (let i = 0; i <= response.length; i++){
        this.pizzaList.push({
          Id: response[i].id,
          Nom : response[i].nom,
          Photo: response[i].photo,
          Prix: response[i].prix,
        });
      }
    });
  }

  detailPizza(idParameter: number) {
    const navigationExtras: NavigationExtras = { state: { detailPage: idParameter } };
    this.router.navigate(['/pizza-detail'], navigationExtras);
  }

  addPanier(nomPizza: string, prixPizza: number, photoPizza: string, idPizza: number) {
    const navigationExtras: NavigationExtras = { state: { pizzaName: nomPizza, pizzaPrice: prixPizza, pizzaPhoto: photoPizza, pizzaId: idPizza} };
    this.router.navigate(['/panier-pizza'], navigationExtras);
    this.panierPizzaService.addPizzaToCart(nomPizza, prixPizza, photoPizza, idPizza);
  }
  ngOnInit() {
  }

}

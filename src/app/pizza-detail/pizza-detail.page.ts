import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {PanierPizzaService} from '../services/panier-pizza.service';


@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.page.html',
  styleUrls: ['./pizza-detail.page.scss'],
})



export class PizzaDetailPage implements OnInit {

  pizzaId: any;
  Nom: string;
  Prix: number;
  photoPizza: string;
  ingredientsPizza: [];
  listeIngredients: [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private panierPizzaService: PanierPizzaService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pizzaId = this.router.getCurrentNavigation().extras.state.detailPage;
        console.log(this.pizzaId);
      }
    });

    this.http.get('https://api.ynov.jcatania.io/pizza').subscribe((response: any[]) => {
      const pizzaDetail = response.find((item) => {
        if (this.pizzaId != null) {
          return item.id === this.pizzaId;
        }
      });
      this.ingredientsPizza = pizzaDetail.ingredients;
      this.Nom = pizzaDetail.nom;
      this.photoPizza = pizzaDetail.photo;
      this.Prix = pizzaDetail.prix;
      });

    // Api ne fonctionne pas...
    this.http.get('https://api.ynov.jcatania.io/ingredient').subscribe((responseIngredient: any[]) => {
      for (let i = 0; i <= this.ingredientsPizza.length; i++) {
        const pizzaIngredients = responseIngredient.find((itemIngr) => {
          return itemIngr.id === this.ingredientsPizza[i];
        });
        console.log(pizzaIngredients);
      }
    });
  }

  addPanier(nomPizza: string, prixPizza: number, photoPizza: string, idPizza: number) {
    const navigationExtras: NavigationExtras = { state: { pizzaName: nomPizza, pizzaPrice: prixPizza, pizzaPhoto: photoPizza, pizzaId: idPizza} };
    this.router.navigate(['/panier-pizza'], navigationExtras);
    this.panierPizzaService.addPizzaToCart(nomPizza, prixPizza, photoPizza, idPizza);
  }

  ngOnInit() {
    }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {PanierPizzaService} from '../services/panier-pizza.service';

@Component({
  selector: 'app-panier-pizza',
  templateUrl: './panier-pizza.page.html',
  styleUrls: ['./panier-pizza.page.scss'],
})
export class PanierPizzaPage implements OnInit {

  pizzaName: string;
  pizzaPhoto: string;
  pizzaPrice: number;
  panier: number[];



  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private panierPizzaService: PanierPizzaService) {

    this.panierPizzaService.panier
        .subscribe(value => {
          this.panier = value;
        });

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pizzaName = this.router.getCurrentNavigation().extras.state.pizzaName;
        this.pizzaPrice = this.router.getCurrentNavigation().extras.state.pizzaPrice;
        this.pizzaPhoto = this.router.getCurrentNavigation().extras.state.pizzaPhoto;
      }

    });

  }

  removePizza(numb: number) {
    this.panierPizzaService.deletePizzaFromCart(numb);
  }

  ngOnInit() {
  }

}

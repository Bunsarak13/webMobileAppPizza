import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierPizzaService {

  panier: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { }

  addPizzaToCart(nomPizza: string, prixPizza: number, photoPizza: string, idPizza: number) {
    const tmp = this.panier.getValue();
    tmp.push({
      Nom: nomPizza,
      Prix: prixPizza,
      Photo: photoPizza,
      Id: idPizza,
    })
    console.log(tmp)
    this.panier.next(this.panier.getValue());
  }
  deletePizzaFromCart(idPizza: number) {
    const recupList = this.panier.getValue();
    const findIndex = recupList.findIndex((item) => {
      return item.Id === idPizza;
    })

    this.panier.getValue().splice(findIndex, 1);
    this.panier.next(this.panier.getValue());
  }
}

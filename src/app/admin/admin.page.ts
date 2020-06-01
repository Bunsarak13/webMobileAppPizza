import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  pizzaList = [];

  constructor(private http: HttpClient) {
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

  ngOnInit() {
  }

}

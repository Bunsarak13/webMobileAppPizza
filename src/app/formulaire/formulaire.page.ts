import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {

  data: any;
  nom: string;
  prix: number;
  photo: string;

  constructor(private http: HttpClient) {

  }

  send = {}
  submit(){
    this.data = this.send;
    this.nom = this.data.nom;
    this.prix = this.data.prix;
    this.photo = this.data.photo;
    this.http.post('https://api.ynov.jcatania.io/pizza', {
      nom : this.nom,
      prix: this.prix,
      photo: this.photo,
    }).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
